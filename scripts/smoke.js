const fs = require('fs');
const mustHave = [
  'app/page.tsx',
  'app/leaderboard/page.tsx',
  'app/students/page.tsx',
  'app/analytics/page.tsx',
  'app/settings/page.tsx',
  'app/classes/page.tsx',
  'app/attendance/page.tsx',
  'lib/mockData.json'
];
const missing = mustHave.filter(p=>!fs.existsSync(p));
if(missing.length){
  console.error('Missing required files:', missing);
  process.exit(1);
}
try{
  const data = JSON.parse(fs.readFileSync('lib/mockData.json','utf-8'));
  if(!Array.isArray(data.students) || data.students.length===0) throw new Error('students missing');
  if(!Array.isArray(data.leaderboard) || data.leaderboard.length===0) throw new Error('leaderboard missing');
  if(!Array.isArray(data.classes) || data.classes.length===0) throw new Error('classes missing');
  if(!Array.isArray(data.attendance) || data.attendance.length===0) throw new Error('attendance missing');
  console.log('Smoke test passed ✔');
} catch(e){
  console.error('Data test failed:', e.message);
  process.exit(1);
}
