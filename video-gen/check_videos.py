#!/usr/bin/env python3
"""
Check status of Veo video generation operations and download completed videos
"""

import os
import json
import time
from pathlib import Path
from dotenv import load_dotenv
import requests

load_dotenv()
API_KEY = os.getenv('GOOGLE_GEMINI_API_KEY')


def check_and_download():
    """Check all pending operations and download completed videos"""

    operations_file = Path("output/operations.json")
    if not operations_file.exists():
        print("No operations.json found. Run generate_hero_videos.py first.")
        return

    with open(operations_file) as f:
        operations = json.load(f)

    print("\n" + "="*60)
    print("CHECKING VIDEO GENERATION STATUS")
    print("="*60)

    updated_operations = []

    for op in operations:
        case_study = op.get("case_study", "unknown")
        print(f"\n{case_study.upper()}:")

        if op.get("status") == "completed":
            print("  Already completed")
            updated_operations.append(op)
            continue

        if op.get("status") == "error":
            print(f"  Error: {op.get('error')}")
            updated_operations.append(op)
            continue

        operation_name = op.get("operation")
        if not operation_name:
            print("  No operation ID")
            updated_operations.append(op)
            continue

        # Check status
        url = f"https://generativelanguage.googleapis.com/v1beta/{operation_name}?key={API_KEY}"

        try:
            response = requests.get(url)
            result = response.json()

            if result.get("done"):
                print("  Status: COMPLETED")

                # Extract video
                video_data = result.get("response", {}).get("generatedSamples", [{}])[0]
                video_uri = video_data.get("video", {}).get("uri")

                if video_uri:
                    output_path = f"output/{case_study}_hero.mp4"
                    print(f"  Downloading to: {output_path}")

                    video_response = requests.get(video_uri)
                    with open(output_path, "wb") as f:
                        f.write(video_response.content)

                    op["status"] = "completed"
                    op["output_path"] = output_path
                else:
                    print("  No video URI in response")
                    op["status"] = "error"
                    op["error"] = "No video URI"
            else:
                metadata = result.get("metadata", {})
                state = metadata.get("state", "PROCESSING")
                print(f"  Status: {state}")

        except Exception as e:
            print(f"  Error checking status: {e}")
            op["status"] = "error"
            op["error"] = str(e)

        updated_operations.append(op)

    # Save updated status
    with open(operations_file, "w") as f:
        json.dump(updated_operations, f, indent=2)

    # Summary
    completed = sum(1 for o in updated_operations if o.get("status") == "completed")
    print(f"\n{'='*60}")
    print(f"Completed: {completed}/{len(updated_operations)}")
    print("="*60)


if __name__ == "__main__":
    check_and_download()
