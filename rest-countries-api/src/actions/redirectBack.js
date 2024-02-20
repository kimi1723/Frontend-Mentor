'use server';

import { redirect } from "next/navigation";

export async function redirectBack(url) {
    redirect(url);
}