import supabase from "./supabase";
export async function getPages() {
  const { data, error } = await supabase.from("pages").select("*");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getPage(id: number) {
  const { data, error } = await supabase.from("pages").select("*").eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function createPage(pageData: {
  name: string;
  iconName: string;
  group: string;
}) {
  const { data, error } = await supabase.from("pages").insert([pageData]);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
