# INT201-Module2
<h1>วิธีทำข้อสอบ </h1>
<h3>ก่อนเริ่มทำข้อสอบ</h3>

1. เข้า github บน browser 
2. เช็ค github ในเครื่อง 
git config -l
<br>
   ถ้ามี ให้ลบของคนอื่นออก แล้วเข้าของตัวเอง<br>
   ถ้าไม่มี ให้เพิ่มเข้าไป โดยใช้คำสั่ง<br>
$git config --global user.name "Your Name"   
   #กำหนดชื่อผู้ใช้<br>
$git config --global user.email "example@email.com" 
 #กำหนดอีเมล์ของผู้ใช้<br>
$git config --global --list
 #ตรวจสองอีกครั้งหลังจากกำหนดค่าเสร็จแล้ว<br>
3. เข้า github classroom เลือกชื่อเรา กด link  รับเข้ามา repo ของตัวเอง
4. พอเข้า repo ก็ copy link clone ลงเครื่อง โดยการเปิด cmd 
$git clone https://github.com/NewGame0/Android_HelloWorld.git%60%60%60
cd เข้าไฟล์ที่โหลดมา แล้วพิมพ์คำสั่ง 
code .
 เพื่อเปิด vscode

<h3>ขณะทำข้อสอบ</h3>

*อย่าลืมเช็ค  path
เปิด terminal เลือกเป็น cmd
ติดตั้ง 
 npm install 
test 
 npm test 
run file 
 node ตาทด้วยชื่อfile .js

<h3>ทำข้อสอบเสร็จ</h3>

uplode file ด้วยการ
 $git add <file_name>

$git add README.md  
  #เพิ่มไฟล์ชื่อ README.md เข้าไปที่สถานะ Staged<br>
$git add .     
       #ใช้ในกรณีที่มีหลายๆ ไฟล์และต้องการเพิ่มเข้าไปทั้งหมด <br>
git commit<br>
$git commit -m "message"  
        #ยืนยันการเปลี่ยนแปลงพร้อมข้อความ
git push
แล้วไปดูที่ git action
แล้วไปดูที่ Autograding complete


 https://developer.mozilla.org/en-US/ 
