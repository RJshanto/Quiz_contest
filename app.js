

const questions =[
{
'que':' পবিত্র কুরআনুল কারীমের সবচেয়ে ছোট সূরা কোনটি ..?',
'a':'সূরা কাউছার ',
'b':'সূরা বাকারার ',
'c':'আল ফাতিহা',
'd':'মক্কা',
'correct':'a',
},

{
'que':'পবিত্র কুরআনুল কারীমের সবচেয়ে বড় আয়াত কোনটি..?',
'a':' 	মদীনা',
'b':'আল ইমরান',
'c':'সূরা বাকারার ২৮২ নং আয়াত',
'd':'আল মায়িদাহ',
'correct':'c',
},

{
'que':'সপ্তাহিক ঈদের দিন বলা হয় কোন দিনটি কে ..?',
'a':' শনিবার',
'b':'জুমুআর দিন',
'c':'সোমবার',
'd':'বৃহস্পতিবার',
'correct':'b',
},
{

'que':'মানবজাতির মধ্যে প্রথম হত্যাকান্ডের প্রচলন করেন কে..?',
'a':'হাশিয়াতুশ ',
'b':' শয়বা',
'c':'হুমাইদ',
'd':'কাবিল',
'correct':'d',
},
{

'que':'ইসলামের প্রথম মুআযযিন কে..?',
'a':'ইবনে আবী হাতিম রহমাতুল্লাহি আলাইহি ',
'b':'হযরত ইবনু জারীর রহমাতুল্লাহি আলাইহি',
'c':'বিলাল (রা:)',
'd':'হযরত ইবনে মুনজির রহমাতুল্লাহি আলাইহি',
'correct':'c',
},
{

'que':'দুনিয়ায় থাকতেই জান্নাতের সু-সংবাদ প্রাপ্ত সাহাবীর সংখ্যা কতো..?',
'a':'১০ জন ',
'b':'১১০ জন',
'c':'১০১ জন',
'd':'১১ জন',
'correct':'a',
},
{

'que':' দাজ্জালের কোন চোখটি কানা হবে..?',
'a':'** ',
'b':'**',
'c':'বাম চোখ',
'd':'ডান চোখ',
'correct':'d',
},
{

'que':' কুরআনের চূড়া বলা হয় কোন সূরা কে..?',
'a':'আত-তাওবাহ্',
'b':'সূরা বাকারা ',
'c':'আল-আনফাল',
'd':'আল-কাহফ',
'correct':'b',
},
{

'que':'জান্নাতী নারীদের সর্দার কে হবেন..?',
'a':'ফাতিমা (রা:) ',
'b':'উম্মে আইমন (রাঃ)',
'c':'হাবীবা বিনতে আবীফিয়ান (রাঃ)',
'd':'হাফসা (উম্মুল মু’মেনীন)(রাঃ)',
'correct':'a',
},
{

'que':'কোন সাহাবী (রা:) হিজরী সন গণনা প্রবর্তন করেন..?',
'a':'উমার (রা:)',
'b':'আবদুল্লাহ ইবনে আব্বাস (রা) ',
'c':'হুযাইফা ইবনুল ইয়ামান (রা) ',
'd':'আবদুল্লাহ ইবনে সালাম (রা)',
'correct':'a',
},
]


let index =0;
let total = questions.length;
let right = 0,
    wrong = 0;


let quebox =document.getElementById('quebox');
let optioninput = document.querySelectorAll('.options');





const loadque =()=>{
let name ;
    if(index === total){
     name= prompt("enter your name");
       return endQuz(name);
    }else{

    
    reset();
   const data =questions[index];
  
   quebox.innerText=`${index+1})${data.que}`;

   optioninput[0].nextElementSibling.innerText=data.a;
   optioninput[1].nextElementSibling.innerText=data.b;
   optioninput[2].nextElementSibling.innerText=data.c;
   optioninput[3].nextElementSibling.innerText=data.d;

}
}

const submitquz =()=>{
   
    const ans =getanswer();
    const data =questions[index];
    if(ans === data.correct){
       right++ ; 
    }else{
        wrong++ ;
    }
   index++ ;
   loadque();
    return ;
}

const getanswer =()=>{
    let answer ;
    optioninput.forEach(
        (input)=>{
        if(input.checked){
           answer= input.value;
        }
    })
    return answer ;
}

const reset =()=>{
    optioninput.forEach(
        (input)=>{
          input.checked =false;
        }
    )
}

const endQuz =(name)=>{
    document.getElementById('box').innerHTML=`
    <h3> Thank you ${name} ...</h3>
    <h3> Here your Result : ${right}/${total} </h3>
    `;
}



loadque();
