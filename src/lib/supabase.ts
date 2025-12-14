import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if env vars are available
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  if (!supabase) {
    console.warn("Supabase not configured - newsletter subscription disabled");
    return { success: false, message: "Service temporairement indisponible." };
  }

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
