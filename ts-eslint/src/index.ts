import * as fs from 'fs';

async function main(f: string) {
  // fs.promises.readFile(f); // error
  await fs.promises.readFile(f);
}

void (async () => {
  try {
    await main('/etc/passwd');
  } catch (e) {
    console.error(e);
  }
})();
