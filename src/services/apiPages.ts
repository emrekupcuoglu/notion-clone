import { Block } from "@blocknote/core";
import supabase from "./supabase";
export async function getPages() {
  const { data, error } = await supabase.from("page").select("*");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getPage(id: number) {
  const { data, error } = await supabase
    .from("page")
    .select("*")
    .eq("id", id)
    .single();

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
  content: Block[];
}) {
  const { data, error } = await supabase.from("page").insert([pageData]);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function updatePage(id: number, pageData: Block[]) {
  console.log("updatepage", id, pageData);
  const { data, error } = await supabase
    .from("page")
    .update({ content: pageData })
    .eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  console.log("updatepage", data);

  return data;
}
