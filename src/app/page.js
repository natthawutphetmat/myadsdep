import Script from 'next/script';
import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import Vdo from './vdo/page'



function page() {


  return (
  <div className='container'>


<header >
<div className="h1">รับทำโฆษณา สายเทา</div>
<img src="/img/head.jpg" className="header-image"  alt="" />
<h3 className="mb-4">โฆษณาออนไลน์สายเทาเพื่อธุรกิจของคุณ</h3>
        </header>
       
     
        <div className='linecut'></div>
    <section >
    
    <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
      
                  <div className="image-container">
              <Image src="/img/Facebook.png" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Facebook Ads สายเทา</Link>
                </div>
                <div className="body">
                  <h5 className="text-secondary">รับทำโฆษณา Facebook Ads สายเทา</h5>
                  <p>ทำโฆษณา เว็บไซต์ ต่างๆ ด้วยทีมงานมือถือชีพ
                    อัตราค่าบริการเพียงเดือนละ 9,900 บาทจบไม่มีค่าใช้จ่ายใดๆเพิ่มเติมทั้งสิ้น
                    มีรีวิวจากลูกค้าจริงให้ชมไม่บิดไม่ทิ้งงานแน่นอน
                  </p>
                  <Link href="/facebook" className="btn btn-primary">โฆษณาFacebookAdsสายเทา</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
    
    
    
    
                <div className="header">
    
                  <div className="image-container">
              <Image src="/img/Google.png" alt="Google Ads" width={480} height={480}  className="imgp"/>


            </div><Link href="/google">โฆษณาGoogleAdsสายเทา</Link>
                </div>
                <div className="body">
                  <h5 className="text-secondary">รับทำ โฆษณาGoogle สายเทา</h5>
                  <p>ทำโฆษณา เว็บไซต์ ต่างๆ ด้วยทีมงานมือถือชีพ
                    อัตราค่าบริการเพียงเดือนละ 9,900 บาทจบไม่มีค่าใช้จ่ายใดๆเพิ่มเติมทั้งสิ้น
                    มีรีวิวจากลูกค้าจริงให้ชมไม่บิดไม่ทิ้งงานแน่นอน
                    ทางทีมงานมีการรายงานผลงานทุกวัน
                  </p>
                  <Link href="/google" className="btn btn-primary">โฆษณาGoogleAdsสายเทา</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
    
            
                  <div className="image-container">
              <Image src="/img/class.jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/cass">คอร์สสอนทำโฆษณาสายเทา</Link>
    
                </div>
                <div className="body">
                  <h5 className="text-secondary">คอร์สสอนทำโฆษณาGoogleFacebookสายเทา</h5>
                  <p>คอร์สเรียนโฆษณาออนไลน์
                    มาเรียนรู้เทคนิคการทำโฆษณาออนไลน์ให้มีประสิทธิภาพกับเรา </p>
                    <h5>คอร์สเรียนGoogle สายเทา ราคาสุดคุ้มค่า เพียง18500 บาท
                   คอร์สเรียนโฆษณาFacebookสายเทา ราคาสุดคุ้มค่า เพียง10,000 บาท</h5>
    
                  <Link href="/cass"  className="btn btn-primary"> คอร์สสอนทำโฆษณาสายเทา</Link>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    
      <div className="page-section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <p> ทีมงานที่มีคุณภาพทำงานใส่ใจทุกรายละเอียด </p>
              <h2 className="title-section">สนใจจ้างทำโฆษณาออนไลน์สายเทาไว้ใจเราได้</h2>
              <div className="divider"></div>
    
             <p>รูปภาพทั้งหมดนี้เป็นส่วนหนึ่งในการทำงานของเราเท่านั้นนะครับ</p>
              <p>สร้างแบรนด์ด้วยโฆษณาออนไลน์สายเทา บริการตลาดบน Facebook, Google, YouTube</p>
    
              <p>ประสบการณ์บริการโฆษณาออนไลน์สายเทาที่เหนือชั้น ด้วยการส่งมอบผลลัพธ์ที่รวดเร็วและตรงตามเวลาที่กำหนด! ค้นหาทีมงานมืออาชีพที่คุณสามารถไว้วางใจได้ พร้อมการดูแลลูกค้าอย่างไม่มีที่ติบน Facebook, YouTube และ Google</p>
              <Link href="https://lin.ee/1SsS2mm" className="btn btn-primary mt-3">ติดต่อสอบถาม</Link>
            </div>
            <div className="col-lg-6 py-3 wow fadeInRight">
              <div className="img-fluid py-3 text-center">
       
    
                <div className="ximg">
                <Link href="https://adsdeps.com/">

              <Image src="/img/ads.jpg" alt="Facebook Ads" width={480} height={480}  className="imgp" />

              </Link>

            </div>
              </div>
            </div>
          </div>
        </div> 
      </div> 
      
      
      
      
    
      <div className='linecut'></div>
      <div className="page-section bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <p>รูปภาพทั้งหมดนี้เป็นส่วนหนึ่งในการทำงานของเราเท่านั้นนะครับ</p>
            <h2 className="title-section">รูปภาพรีวิวผลงาน จากผู้ใช้งานจริง จากลูกค้าจริง</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
      
                <div className="image-container">
              <Image src="/Google/Google (1).jpg" alt="Facebook Ads" width={480} height={480} className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิวผลงาน Google สายเทา</h5>
                  <p className="card-text">รับทำโฆษณา ออนไลน์ สายเทา
                    รับทำโฆษณาfacebook สายเทา การันตี ยอดสมัครให้ท่านได้
                    facebook-ads
                    </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (2).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5>รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">สร้างแบรนด์ด้วยโฆษณาออนไลน์สายเทา บริการตลาดบน Facebook, Google, YouTube</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (3).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">ประสบการณ์บริการโฆษณาออนไลน์สายเทาที่เหนือชั้น ด้วยการส่งมอบผลลัพธ์ที่รวดเร็วและตรงตามเวลาที่กำหนด! ค้นหาทีมงานมืออาชีพที่คุณสามารถไว้วางใจได้ พร้อมการดูแลลูกค้าอย่างไม่มีที่ติบน Facebook, YouTube และ Google
    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (4).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">ในปัจจุบัน Google และ Facebook หรือช่องทางการทำตลาดออนไลน์ต่างๆได้เปลี่ยนไปอย่างมาก โดยที่เน้นเรื่องของ Content เป็นหลัก พวกเขาสร้างกฏเกณฑ์มากมายในการลิมิตผู้ใช้งานทำการตลาดให้ตรง</p>
                </div>
              </div>
            </div>
        
      
    
    
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (5).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิวผลงาน Google สายเทา</h5>
                  <p className="card-text">รับทำโฆษณา ออนไลน์ สายเทา
                    รับทำโฆษณาfacebook สายเทา การันตี ยอดสมัครให้ท่านได้
                    facebook-ads
                    </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (6).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">สร้างแบรนด์ด้วยโฆษณาออนไลน์สายเทา บริการตลาดบน Facebook, Google, YouTube</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
    
              <div className="image-container">
              <Image src="/Google/Google (7).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">ประสบการณ์บริการโฆษณาออนไลน์สายเทาที่เหนือชั้น ด้วยการส่งมอบผลลัพธ์ที่รวดเร็วและตรงตามเวลาที่กำหนด! ค้นหาทีมงานมืออาชีพที่คุณสามารถไว้วางใจได้ พร้อมการดูแลลูกค้าอย่างไม่มีที่ติบน Facebook, YouTube และ Google
    
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
     
              <div className="image-container">
              <Image src="/Google/Google (8).jpg" alt="Facebook Ads" width={480} height={380}  className="imgp"/>
            </div><Link href="/">โฆษณา Google Ads สายเทา</Link>
    
      
                <div className="card-body">
                  <h5 className="card-title">รูปภาพรีวิว ผลงาน Google สายเทา</h5>
                  <p className="card-text">ในปัจจุบัน Google และ Facebook หรือช่องทางการทำตลาดออนไลน์ต่างๆได้เปลี่ยนไปอย่างมาก โดยที่เน้นเรื่องของ Content เป็นหลัก พวกเขาสร้างกฏเกณฑ์มากมายในการลิมิตผู้ใช้งานทำการตลาดให้ตรง</p>
                </div>
              </div>
            </div>
          </div>
          
    
    
    <Vdo/>
    
    
        </div> 
      </div> 
      <div className='linecut'></div>
      <div className="page-section banner-seo-check">
        <div className="wrap bg-image" >
          <div className="container text-center">
            <div className="row justify-content-center wow fadeInUp">
              <div className="col-lg-8">
                <h2 className="mb-4">Check your Website SEO</h2>
                <form action="#">
                  <input type="text" className="form-control" placeholder="E.g google.com"/>
                  <button type="submit" className="btn btn-success"><h6>Check Now</h6></button>
                </form>
              </div>
            </div>
          </div> 
        </div> 
      </div>
      <div className='linecut'></div>
      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <Link href='/vdo'><b>VDO Youtube</b></Link>
            <div ><h2>review จ้างยิงแอด โฆษณาสายเทา</h2></div>
            <h2 className="title-section">รีวิวการใช้งานจากลูกค้าจริง</h2>
            <div className="divider mx-auto"></div>
          </div>

            </div>
            </div>
       
    </section>
    <div className='linecut'></div>
  </div>
  );
};
  export default page
  
