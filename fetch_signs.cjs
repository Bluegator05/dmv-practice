const fs = require('fs');
const https = require('https');

const urls = [
    { file: 's1.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/STOP_sign.svg/600px-STOP_sign.svg.png' },
    { file: 's2.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/MUTCD_R1-2.svg/600px-MUTCD_R1-2.svg.png' },
    { file: 's3.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/MUTCD_R2-1_70.svg/500px-MUTCD_R2-1_70.svg.png' },
    { file: 's4.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MUTCD_R5-1.svg/600px-MUTCD_R5-1.svg.png' },
    { file: 's5.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/MUTCD_W4-1R.svg/600px-MUTCD_W4-1R.svg.png' },
    { file: 's6.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MUTCD_W6-1.svg/600px-MUTCD_W6-1.svg.png' },
    { file: 's7.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MUTCD_W10-1.svg/600px-MUTCD_W10-1.svg.png' },
    { file: 's8.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/MUTCD_S1-1.svg/600px-MUTCD_S1-1.svg.png' },
    { file: 's9.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/MUTCD_R3-1.svg/600px-MUTCD_R3-1.svg.png' },
    { file: 's10.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MUTCD_W8-5.svg/600px-MUTCD_W8-5.svg.png' }
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    for (const item of urls) {
        try {
            await download(item.url, `public/signs/${item.file}`);
            console.log(`Downloaded ${item.file}`);
        } catch (e) {
            console.error(`Failed ${item.file}`, e);
        }
    }
}
run();
