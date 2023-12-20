import React, { useState } from "react";
import Swal from "sweetalert2";
// import getUID from "uid-generator-package";

export const ContextData = React.createContext();

export function ContextFunction({ children }) {
    // Barcha mahsulotlar
    const [products, setProducts] = useState([
        {
            id: "NDg0M2htdDExNjE44843hmt11618",
            title: "Apple iPhone 15 Pro",
            img: "./img/iphone15pro.jpg",
            description: `Yangi konturlangan qirralari, yangi Action tugmasi, kuchli kamera yangilanishlari va keyingi darajadagi ishlash va mobil oʻyinlar uchun A17 Pro bilan kuchli va yengil titan dizaynga ega. KUPERTINO, KALIFORNIYA Apple bugun Apple kompaniyasining eng yengil Pro modellarini taqdim etish uchun kuchli, ammo engil aerokosmik titan bilan ishlab chiqilgan iPhone 15 Pro va iPhone 15 Pro Max’ni debyut qildi. Yangi dizayn, shuningdek, konturlangan qirralar va sozlanishi mumkin bo'lgan Action tugmasiga ega bo'lib, foydalanuvchilarga iPhone tajribasini shaxsiylashtirishga imkon beradi. Kuchli kamera yangilanishlari ajoyib tasvir sifatiga ega yettita pro linzalari ekvivalentini, jumladan, endi yangi super yuqori aniqlikdagi 24 megapikselli standartni qo‘llab-quvvatlaydigan yanada rivojlangan 48 megapikselli asosiy kamera tizimini, Fokus va chuqurlikni boshqarish bilan keyingi avlod portretlarini, tungi yaxshilanishlarni qo‘llab-quvvatlaydi. rejimi va Smart HDR va butunlay yangi 5x Telefoto kamera faqat iPhone 15 Pro Max’da. A17 Pro keyingi darajadagi o'yin tajribasi va professional ishlashini ochadi. Yangi USB‑C ulagichi USB 3 tezligi bilan quvvatlanadi (USB 2 ga qaraganda 20 baravar tezroq) va yangi video formatlari bilan birga ilgari imkoni bo‘lmagan kuchli professional ish jarayonlarini ta’minlaydi.1 Va sun’iy yo‘ldosh orqali Roadside Assistance qo‘shilishi bilan iPhone 15 Pro qatori foydalanuvchilarni tarmoqdan tashqarida mashina muammosiga duch kelganda yordam berish uchun ulash uchun Apple’ning innovatsion sunʼiy yoʻldosh infratuzilmasiga asoslanadi.`,
            price: 1300,
            discount: 20,
            status: true,
            count: 1,
        },
        {
            id: "NDEwNlZORTM5MTM44106VNE39138",
            title: "Apple iPhone 15 Plus",
            img: "./img/iphone15plus.jpg",
            description: `Dinamik orolda ogohlantirishlar va jonli harakatlar paydo bo'ladi - shuning uchun siz boshqa biror narsa qilayotganingizda ularni o'tkazib yubormaysiz. Siz keyingi safaringizni kuzatishingiz, kim qo'ng'iroq qilayotganini ko'rishingiz, parvoz holatini tekshirishingiz va hokazo. Innovatsion yangi dizayn materialga rang singdirilgan orqa oynaga ega. Shisha uchun maxsus ikki tomonlama ion almashish jarayoni va aerokosmik alyuminiy korpus iPhone 15 Plus-ni nihoyatda bardoshli qilishga yordam beradi. Ceramic Shield old qismi har qanday smartfon oynasidan qattiqroq. iPhone chayqalish, suv va changga chidamli. Qanday yengillik. Yangi 48 megapikselli asosiy kamera. Hayratlanarli, tabassum bilan suratga olish uchun. Endi asosiy kamera juda yuqori aniqlikda suratga oladi. Shunday qilib, hayratlanarli tafsilotlarga ega ajoyib suratlarni olish har qachongidan ham osonroq - oniy suratlardan tortib ajoyib manzaralargacha. Fokus-pokus, sehrli yangi portretlar. Batafsilroq tafsilot va boy rang portretlaringizda keskin farq qiladi. Va endi siz suratga olganingizdan keyin ham fokusni mavzular o'rtasida o'zgartirish uchun bosing. Presto chango. O'tmasdan oldingi lahzani tezda suratga olishni xohlaysizmi? Endi siz portret rejimiga o'tishingiz shart emas. Agar ob'ektingiz odam, it yoki mushuk bo'lsa, iPhone 15 Plus avtomatik ravishda chuqur ma'lumotlarni yozib oladi. Shunday qilib, siz suratingizni bir zumda portret sifatida, badiiy xiralashtirish effekti bilan ko'rishni tanlashingiz mumkin. Yoki keyinroq Rasmlar ilovasida. A16 Bionic barcha turdagi ilg'or funksiyalarni quvvatlaydi. 24 megapikselli fotosuratlar va keyingi avlod portretlari uchun ishlatiladigan hisoblash fotografiyasi kabi. Telefon qo'ng'iroqlari uchun ovozli izolyatsiya. Grafika intensiv o'yinlar uchun esa silliq ishlash. Hammasi ajoyib batareya quvvati uchun ajoyib samaradorlikka ega. Bu Pro chipi sifatida boshlangani ajablanarli emas.`,
            price: 1100,
            discount: 20,
            status: false,
            count: 1,
        },
        {
            id: "ODMxNXdOcDU2ODcz8315wNp56873",
            title: "Samsung Galaxy S23 Ultra",
            img: "./img/samsungs23ultra.jpg",
            description: `Ajoyib dizaynning qaytishi bitta asosiy farq - qayta ishlangan va barqaror materiallardan foydalanish. Ushbu smartfonni yaratishda biz alyuminiy ramkani bo'yash uchun qayta ishlangan shisha va tabiiy bo'yoqlardan foydalandik. Galaktikaning yangi soyalari tabiatning go'zalligidan ilhomlangan. Tabiiy bo'yoqlardan foydalangan holda yaratilgan har bir rang ifodali va tabiiy ko'rinadi. Qayta ishlangan shisha va PET plyonkasidan foydalanish bu smartfonni biz yaratgan eng barqaror smartfonga aylantiradi. Qayta ishlangan qog'ozdan tayyorlangan qadoq esa bizning sayyoramizga bo'lgan tashvishimizni yana bir bor ta'kidlaydi. Bloknotlar va qo'lda yozilgan eslatmalar muxlislari uchun biz o'rnatilgan S Pen-ni qo'shdik. Uning ishlatilishi qalam bilan oddiy yozish tuyg'usini yaratadi, lekin ayni paytda qog'ozni isrof qilish va uni keyinchalik utilizatsiya qilish haqida tashvishlanishga hojat yo'q. Biz eng katta Galaxy piksel sensori, yorug'likni yutish va video barqarorlashtirish texnologiyasini ishlab chiqdik va keyin ularni bitta professional darajadagi kameraga birlashtirdik. Sizning suratlaringiz va videolaringiz oqshomdan tonggacha toza bo'ladi. Bizning eng innovatsion Galaxy sensorimiz va eng tezkor protsessorimiz kam yorug'likda suratga olish va shovqinni kamaytirish imkonini beradi. Bizning Pro-grade kameramiz kadrning chuqurligi va yuqori aniqligini ta'minlaydi. Siz fonni xiralashtirishingiz va diqqatni xuddi professional suratga olish kabi mavzuga qaratishingiz mumkin. Endi kino sahnalarini suratga olish uchun yozib olish tugmasini bosing. Stabillashtirish va shovqinni pasaytirish texnologiyasi tufayli past yorug'likdagi videolar silliq bo'ladi va hatto yorug'lik suratga olingan ob'ektlarning orqasida bo'lsa ham, tafsilotlar yo'qolmaydi.`,
            price: 1000,
            discount: 20,
            status: true,
            count: 1,
        },
    ]);

    // Korzinkadagi barcha mahsulotlar
    const [basket, setBasket] = useState([]);

    // Korzinkaga mahsulot qo'shish
    function addToCart(mahsulot) {
        if (mahsulot.status) {
            if (basket.filter(element => element.id === mahsulot.id).length === 0) {
                setBasket([...basket, mahsulot]);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                Swal.fire({
                    title: "Ogohlantirish!",
                    text: "Ushbu mahsulot allaqchon mavjud!",
                    icon: "warning"
                });
            }
        }
        else {
            Swal.fire({
                title: "Ogohlantirish!",
                text: "Afsuski ushbu mahsulot omborda mavjud emas!",
                icon: "warning"
            });
        }
    };

    function deleteProductFromCart(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setBasket(basket.filter(item => item.id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    function increment(mahsulot) {
        setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count + 1 } : item));
    };

    function decrement(mahsulot) {
        if (mahsulot.count !== 1) {
            setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count - 1 } : item));
        }
        else {
            deleteProductFromCart(mahsulot.id);
        }
    };

    // Takrorlanmas id
    // const UID = getUID();
    // console.log(UID);

    return (
        <ContextData.Provider value={{
            products,
            setProducts,
            addToCart,
            basket,
            deleteProductFromCart,
            increment,
            decrement,
        }}>
            {children}
        </ContextData.Provider>
    )
};