'use server';

import fs from 'fs/promises';
import path from 'path';

export async function saveEmail(formData: FormData) {
  const email = formData.get('email')?.toString() || '';

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Invalid email' };
  }

  const filePath = path.join(process.cwd(), 'subscribers.txt');

  await fs.appendFile(filePath, `${email}\n`, 'utf8');

  return { success: true };
}
