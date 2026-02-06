# Daito Design - Veo Hero Video Generator

Generate cinematic hero videos for case study pages using Google Veo AI.

## Quick Start

### Option 1: Run Scripts Locally

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Your API key is already configured** in `.env` (keep this file secure!)

3. **Generate videos:**
   ```bash
   python generate_hero_videos.py
   ```

4. **Check status & download:**
   ```bash
   python check_videos.py
   ```
   Run this periodically - Veo video generation takes 2-5 minutes per video.

5. **Move to website:**
   ```bash
   mv output/*.mp4 ../videos/
   ```

### Option 2: Use Google AI Studio

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Select Veo from the model options
3. Use these prompts for each case study:

---

## Video Prompts

### Shell
```
Cinematic slow motion footage of seismic data visualization flowing through
3D subsurface geological formations, warm amber and earth tones, professional
industrial aesthetic, subtle camera movement, 4K quality, no text or logos
```

### Constellation
```
Dramatic aerial view of nuclear power plant control room at dawn, blue and
cyan lighting, data screens with flowing information, professional and
high-tech atmosphere, subtle steam rising, cinematic quality, no text
```

### Schneider Electric
```
Futuristic AI-powered energy management visualization, glowing green data
flows through industrial systems, dark tech aesthetic with Schneider green
accents, autonomous operations concept, cinematic quality, no text
```

### TDECU
```
Modern credit union digital banking interface visualization, warm professional
atmosphere, flowing user journey paths connecting seamlessly, red accent
highlights on dark background, subtle animation of data flows, no text
```

### Bluware
```
Deep ocean seismic survey visualization, blue and teal color palette,
subsurface data layers revealing geological formations, professional
geoscience aesthetic, subtle wave motion, cinematic 4K quality, no text
```

### 3LC
```
Elegant brand strategy visualization, yellow and navy color scheme,
abstract flowing shapes representing brand identity evolution, professional
and modern aesthetic, subtle motion, no text or logos
```

---

## Integration

See `video-hero-component.html` for the HTML/CSS needed to add videos to case study pages.

Place generated videos in `../videos/` with names:
- `shell_hero.mp4`
- `constellation_hero.mp4`
- `schneider_hero.mp4`
- `tdecu_hero.mp4`
- `bluware_hero.mp4`
- `3lc_hero.mp4`

---

## Cost Estimate

| Model | Cost/second | Per 8s video | All 6 videos |
|-------|-------------|--------------|--------------|
| Veo 3.1 Fast | $0.10 | $0.80 | ~$5 |
| Veo 2 | $0.35 | $2.80 | ~$17 |
| Veo 3.1 | $0.75 | $6.00 | ~$36 |

**Recommendation:** Use Veo 3.1 Fast for drafts, Veo 2 for finals.

---

## Security

⚠️ **Never commit `.env` to version control!**

The `.gitignore` file is already configured to exclude:
- `.env` (API key)
- `output/` (generated videos)
- `*.mp4` files
