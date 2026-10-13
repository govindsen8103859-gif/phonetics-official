import { json, preflight, cleanText, validEmail, safeJson } from "../_shared/http.ts";
import { serviceClient } from "../_shared/supabase.ts";
Deno.serve(async (req) => {
  const pre = preflight(req); if (pre) return pre;
  try {
    const b = await safeJson(req);
    if (!b) return json({ error: "Invalid request." }, 400);
    const buyer_name = cleanText(b.buyer_name,100);
    const buyer_email = cleanText(b.buyer_email,254);
    const buyer_phone = cleanText(b.buyer_phone,20);
    const phone_interest = cleanText(b.phone_interest,200);
    const message = cleanText(b.message,1000);
    if (!buyer_name || !validEmail(buyer_email) || !buyer_phone) return json({ error: "Enter your name, a valid email and phone number." }, 400);
    const sb = serviceClient();
    // SCHEMA CONTRACT: confirm existing buyer_requests columns before deployment.
    const { error } = await sb.from("buyer_requests").insert({
      buyer_name, buyer_email, buyer_phone, phone_interest, message, status:"new", created_at:new Date().toISOString()
    });
    if (error) {
      console.error("Buyer request insert failed:", error.message);
      return json({ error: "Your enquiry could not be saved. Please try again later." }, 500);
    }
    return json({ ok:true },201);
  } catch (e) {
    console.error("submit-buyer failed:", e instanceof Error ? e.message : "unknown error");
    return json({ error:"Enquiry could not be submitted." },500);
  }
});
