from playwright.sync_api import Page, expect, sync_playwright

def verify_cookie_consent(page: Page):
    # 1. Navigate to the homepage
    page.goto("http://localhost:3000")

    # Wait for the banner to animate in
    page.wait_for_timeout(1000)

    # 2. Check if the banner is visible
    # Using a part of the text that matches the translation in CookieBanner.tsx
    banner_text = page.get_by_text("Rispettiamo la tua privacy")
    expect(banner_text).to_be_visible()

    # 3. Take a screenshot of the banner
    page.screenshot(path="/home/jules/verification/banner_visible.png")

    # 4. Click "Accetta e Continua"
    accept_button = page.get_by_role("button", name="Accetta e Continua")
    expect(accept_button).to_be_visible()
    accept_button.click()

    # Wait for animation/state update
    page.wait_for_timeout(1000)

    # 5. Verify banner is gone
    expect(banner_text).not_to_be_visible()

    # 6. Verify dataLayer updates (using evaluate)
    # We expect 'cookie_consent_update' event to be in dataLayer
    data_layer = page.evaluate("() => window.dataLayer")

    # Check if we have the update event
    found_update = False
    for item in data_layer:
        if item.get('event') == 'cookie_consent_update':
            found_update = True
            break

    if not found_update:
        print("WARNING: cookie_consent_update event not found in dataLayer")
        print(data_layer)
    else:
        print("SUCCESS: cookie_consent_update event found in dataLayer")

    page.screenshot(path="/home/jules/verification/banner_accepted.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_cookie_consent(page)
        finally:
            browser.close()
