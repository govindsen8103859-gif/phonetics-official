# Phonetics — Frontend Phase 1

**Tagline:** Find your next phone. Love the price.

This ZIP contains the first frontend prototype for the Phonetics pre-owned smartphone marketplace.

## Files
- `index.html` — website structure and page content
- `style.css` — responsive navy, white and gold styling
- `script.js` — mobile menu, empty-inventory search feedback and form validation
- `README.md` — setup and status notes
- `.nojekyll` — helps GitHub Pages serve static files directly

## Important status: FRONTEND ONLY / BACKEND NOT CONNECTED
- No real listings are included. Inventory shows an honest empty state.
- Seller form does not send or save data.
- Buyer purchase requests are not enabled.
- Admin authentication/dashboard is not implemented in this frontend.
- There is no database or file upload connection yet.
- EmailJS settings have not been integrated or tested.
- Do not collect real customer information with this prototype.
- Do not store bills or private seller details in this public repository.

## Upload from Android to the existing repository
1. Download and extract the ZIP on your phone, if your file manager supports ZIP extraction.
2. Open the existing repository: https://github.com/govindsen8103859-gif/phonetics-official
3. Choose **Add file → Upload files**. Upload `index.html`, `style.css`, `script.js`, and `.nojekyll` to the repository root. You may replace the existing `README.md` with this README after checking it. Commit the changes to `main`.

Keep all files in the root folder. `index.html` must not be inside a nested folder.

## GitHub Pages setup
In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose branch `main`, choose folder `/(root)`, and save. GitHub documents these steps here:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The expected address is:
https://govindsen8103859-gif.github.io/phonetics-official/

That URL is not confirmed live by this package. After upload, check the Pages status and open **Visit site** to verify deployment.

## Next phases before real use
1. Choose and configure a free backend (Supabase or Firebase) after checking current free-tier limits.
2. Implement server-enforced access control, private storage for proof documents, safe image validation, and real admin authentication.
3. Connect seller and buyer forms to the database and add admin notifications.
4. Verify actual EmailJS template variables and recipients before integration.
5. Test the full seller-review-approval-buyer-request workflow before accepting real customer data.

## Test notes
- File references in this package are relative and point to included files.
- HTML and JavaScript were reviewed for basic consistency in this generation environment.
- This is not a substitute for browser/device testing. Real Android layout, upload, deployment and backend workflow are **UNTESTED** until you upload and verify them.
