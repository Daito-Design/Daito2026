# HubSpot Integration Guide for Daito Website V2

## Overview

This guide documents how to integrate HubSpot forms, tracking, and lead scoring with the new Daito website.

---

## 1. Form Integration

### Required Forms

| Form | Page | Fields | Purpose |
|------|------|--------|---------|
| Contact Form | contact.html | Name, Email, Company, Message | General inquiries |
| Manual Download | agentic-manual.html | First Name, Email, Company, Job Title, Company Size, AI Stage | Lead capture |
| Consultation Request | agentic-assessment.html (results) | Name, Email, Company, Phone, Use Case | Sales handoff |

### Implementation Options

#### Option A: HubSpot Embedded Forms (Recommended)

1. Create forms in HubSpot → Marketing → Forms
2. Copy the embed code from each form
3. Replace the existing HTML forms with HubSpot embeds

```html
<!-- Example: Replace existing form with HubSpot embed -->
<div id="hubspot-form-contact"></div>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID",
    target: "#hubspot-form-contact"
  });
</script>
```

#### Option B: Non-HubSpot Forms API (Advanced)

Submit to HubSpot via their Forms API while keeping custom styling:

```javascript
// POST to HubSpot Forms API
const portalId = 'YOUR_PORTAL_ID';
const formId = 'YOUR_FORM_ID';
const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fields: [
      { name: 'email', value: formData.email },
      { name: 'firstname', value: formData.firstName },
      { name: 'company', value: formData.company }
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  })
});
```

---

## 2. Tracking Code

### HubSpot Tracking Script

Add to all pages in the `<head>` section:

```html
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
<!-- End of HubSpot Embed Code -->
```

### UTM Parameter Handling

The website should pass UTM parameters to HubSpot. Add this to main.js:

```javascript
// Capture UTM parameters and store in session
function captureUTMs() {
  const params = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  utmParams.forEach(param => {
    const value = params.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });
}

// Add to form submissions
function getUTMData() {
  return {
    utm_source: sessionStorage.getItem('utm_source') || '',
    utm_medium: sessionStorage.getItem('utm_medium') || '',
    utm_campaign: sessionStorage.getItem('utm_campaign') || '',
    utm_content: sessionStorage.getItem('utm_content') || ''
  };
}

captureUTMs();
```

---

## 3. Lead Scoring Setup

### Scoring Rules (Configure in HubSpot)

| Action | Points | HubSpot Property |
|--------|--------|------------------|
| Completes Risk Assessment | +10 | assessment_completed |
| Downloads Agentic Manual | +15 | manual_downloaded |
| Requests Consultation | +20 | consultation_requested |
| Opens nurture email | +2 | (automatic) |
| Clicks nurture email link | +3 | (automatic) |

### MQL Definition
- **Threshold:** 30 points
- **Workflow:** Auto-notify sales when threshold reached

### Implementation

1. Create custom properties in HubSpot:
   - `assessment_completed` (checkbox)
   - `assessment_score_data` (multi-line text for JSON)
   - `assessment_score_human` (number)
   - `assessment_score_business` (number)
   - `assessment_score_compliance` (number)
   - `assessment_score_governance` (number)
   - `manual_downloaded` (checkbox)
   - `consultation_requested` (checkbox)

2. Set up scoring rules in HubSpot → Settings → Lead Scoring

---

## 4. Agentic Assessment Integration

### Storing Assessment Results

When a user completes the assessment, send results to HubSpot:

```javascript
// After assessment completion, before showing results
function sendAssessmentToHubSpot(results, email) {
  // Only send if email is provided (optional for assessment)
  if (!email) return;

  const _hsq = window._hsq = window._hsq || [];
  _hsq.push(['identify', {
    email: email,
    assessment_completed: true,
    assessment_score_data: JSON.stringify(results.scores),
    assessment_score_human: results.scores.human,
    assessment_score_business: results.scores.business,
    assessment_score_compliance: results.scores.compliance,
    assessment_score_governance: results.scores.governance
  }]);
  _hsq.push(['trackEvent', {
    id: 'Completed Risk Assessment',
    value: results.overallScore
  }]);
}
```

### Linking Assessment to Manual Download

When user downloads manual after assessment:

```javascript
function linkAssessmentToLead(email) {
  const assessmentData = sessionStorage.getItem('assessmentResults');
  if (assessmentData) {
    // Include in form submission hidden fields
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'assessment_data';
    hiddenInput.value = assessmentData;
    form.appendChild(hiddenInput);
  }
}
```

---

## 5. Email Nurture Workflow

### Trigger: Manual Download

1. Immediately send: Results recap + thank you
2. Day 2: Deep dive on highest risk category
3. Day 5: Relevant case study
4. Day 9: Soft discovery question
5. Day 14: Consultation offer

### HubSpot Workflow Setup

1. Create workflow: Marketing → Workflows → Create
2. Trigger: Form submission = Manual Download Form
3. Add delays and emails per schedule above
4. Add branch logic for risk category (use `assessment_score_*` properties)

---

## 6. Testing Checklist

Before launch:

- [ ] All forms submit to HubSpot correctly
- [ ] UTM parameters are captured
- [ ] Lead scoring increments properly
- [ ] Assessment results are stored in HubSpot
- [ ] Nurture workflow triggers on manual download
- [ ] MQL notification triggers at 30 points
- [ ] Tracking code fires on all pages

---

## 7. Files to Modify

| File | Changes Needed |
|------|----------------|
| All pages | Add HubSpot tracking script |
| contact.html | Replace form with HubSpot embed |
| agentic-manual.html | Replace form with HubSpot embed |
| agentic-assessment.html | Add assessment tracking + results storage |
| js/main.js | Add UTM capture + assessment integration |

---

## Contact

For HubSpot account access or API credentials, contact Joe.
