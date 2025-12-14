import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, subscribed_at: new Date().toISOString() }]);

    if (error) {
      if (error.code === "23505") {
        return { success: false, message: "Cet email est déjà inscrit à notre newsletter." };
      }
      throw error;
    }

    return { success: true, message: "Merci pour votre inscription !" };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { success: false, message: "Une erreur est survenue. Veuillez réessayer." };
  }
}
