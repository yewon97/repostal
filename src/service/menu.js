import { readFile } from 'fs/promises';
import path from 'path';

export async function getAllMenu() {
  const filePath = path.join(process.cwd(), 'data', 'menu.json');
  return readFile(filePath, 'utf-8').then(JSON.parse);
}

export async function getAdminMenu() {
  const filePath = path.join(process.cwd(), 'data', 'adminMenu.json');
  return readFile(filePath, 'utf-8').then(JSON.parse);
}
