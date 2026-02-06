#!/usr/bin/env python3
"""
Daito Design Hero Video Generator using Google Veo
Generates cinematic hero videos for case study pages
"""

import os
import json
import time
import base64
from pathlib import Path
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
API_KEY = os.getenv('GOOGLE_GEMINI_API_KEY')

# Veo API endpoint
VEO_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/veo-2.0-generate-001:predictLongRunning"

# Case study video configurations
HERO_VIDEOS = {
    "shell": {
        "prompt": "Cinematic slow motion footage of seismic data visualization flowing through 3D subsurface geological formations, warm amber and earth tones, professional industrial aesthetic, subtle camera movement, 4K quality, no text or logos",
        "first_frame": "../images/Seismic Acquisition Platforms.jpg",
        "duration": 8,
        "aspect_ratio": "16:9"
    },
    "constellation": {
        "prompt": "Dramatic aerial view of nuclear power plant control room at dawn, blue and cyan lighting, data screens with flowing information, professional and high-tech atmosphere, subtle steam rising, cinematic quality, no text",
        "first_frame": "../images/nuclear-control-room.jpg",
        "duration": 8,
        "aspect_ratio": "16:9"
    },
    "schneider": {
        "prompt": "Futuristic AI-powered energy management visualization, glowing green data flows through industrial systems, dark tech aesthetic with Schneider green accents, autonomous operations concept, cinematic quality, no text",
        "first_frame": None,  # Generate from scratch
        "duration": 8,
        "aspect_ratio": "16:9"
    },
    "tdecu": {
        "prompt": "Modern credit union digital banking interface visualization, warm professional atmosphere, flowing user journey paths connecting seamlessly, red accent highlights on dark background, subtle animation of data flows, no text",
        "first_frame": None,
        "duration": 8,
        "aspect_ratio": "16:9"
    },
    "bluware": {
        "prompt": "Deep ocean seismic survey visualization, blue and teal color palette, subsurface data layers revealing geological formations, professional geoscience aesthetic, subtle wave motion, cinematic 4K quality, no text",
        "first_frame": None,
        "duration": 8,
        "aspect_ratio": "16:9"
    },
    "3lc": {
        "prompt": "Elegant brand strategy visualization, yellow and navy color scheme, abstract flowing shapes representing brand identity evolution, professional and modern aesthetic, subtle motion, no text or logos",
        "first_frame": None,
        "duration": 8,
        "aspect_ratio": "16:9"
    }
}


def load_image_as_base64(image_path: str) -> str | None:
    """Load an image file and return as base64 string"""
    if not image_path or not Path(image_path).exists():
        return None

    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


def generate_video(case_study: str, config: dict) -> dict:
    """
    Generate a hero video using Veo API

    Args:
        case_study: Name of the case study (e.g., 'shell')
        config: Video configuration dictionary

    Returns:
        dict with status and video URL/path
    """
    import requests

    print(f"\n{'='*60}")
    print(f"Generating hero video for: {case_study.upper()}")
    print(f"{'='*60}")

    # Build request payload
    payload = {
        "instances": [{
            "prompt": config["prompt"]
        }],
        "parameters": {
            "aspectRatio": config.get("aspect_ratio", "16:9"),
            "durationSeconds": config.get("duration", 8),
            "personGeneration": "dont_allow",  # Safety setting
            "numberOfVideos": 1
        }
    }

    # Add first frame reference if available
    if config.get("first_frame"):
        image_b64 = load_image_as_base64(config["first_frame"])
        if image_b64:
            payload["instances"][0]["image"] = {
                "bytesBase64Encoded": image_b64
            }
            print(f"  Using reference image: {config['first_frame']}")

    print(f"  Prompt: {config['prompt'][:80]}...")
    print(f"  Duration: {config['duration']}s | Aspect: {config['aspect_ratio']}")

    # Make API request
    headers = {
        "Content-Type": "application/json"
    }

    url = f"{VEO_ENDPOINT}?key={API_KEY}"

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()

        result = response.json()
        operation_name = result.get("name")

        print(f"  Operation started: {operation_name}")

        return {
            "status": "processing",
            "operation": operation_name,
            "case_study": case_study
        }

    except requests.exceptions.RequestException as e:
        print(f"  ERROR: {str(e)}")
        return {
            "status": "error",
            "error": str(e),
            "case_study": case_study
        }


def check_operation_status(operation_name: str) -> dict:
    """Check the status of a video generation operation"""
    import requests

    url = f"https://generativelanguage.googleapis.com/v1beta/{operation_name}?key={API_KEY}"

    response = requests.get(url)
    return response.json()


def download_video(video_uri: str, output_path: str):
    """Download generated video to local file"""
    import requests

    response = requests.get(video_uri)
    with open(output_path, "wb") as f:
        f.write(response.content)
    print(f"  Downloaded to: {output_path}")


def main():
    """Generate all hero videos"""
    print("\n" + "="*60)
    print("DAITO DESIGN - VEO HERO VIDEO GENERATOR")
    print("="*60)

    if not API_KEY:
        print("ERROR: GOOGLE_GEMINI_API_KEY not found in .env file")
        return

    # Create output directory
    output_dir = Path("output")
    output_dir.mkdir(exist_ok=True)

    # Track all operations
    operations = []

    # Start video generation for each case study
    for case_study, config in HERO_VIDEOS.items():
        result = generate_video(case_study, config)
        operations.append(result)
        time.sleep(2)  # Rate limiting

    # Save operation IDs for later retrieval
    with open(output_dir / "operations.json", "w") as f:
        json.dump(operations, f, indent=2)

    print("\n" + "="*60)
    print("VIDEO GENERATION INITIATED")
    print("="*60)
    print(f"\nOperations saved to: output/operations.json")
    print("Run 'python check_videos.py' to check status and download completed videos")

    return operations


if __name__ == "__main__":
    main()
