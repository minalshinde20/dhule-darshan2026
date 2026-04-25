import React from "react";
import { Card } from "react-bootstrap";
import "./Forts.css";

import dhuleMap from "../../assets/Images/dhule-city-map.webp";
import lalingKilla from "../../assets/Images/killa.png";
import bhamerFort from "../../assets/Images/Bhamer fort.jpg";
import songirFort from "../../assets/Images/songir.jpg";
import thalnerFort from "../../assets/Images/thalner.png";

function TravelGuide() {
  return (
    <div className="travel-container">

      {/* Navbar */}
      <header className="travel-header">
        <nav className="travel-nav">
          <h1 className="logo">Dhule Darshan</h1>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/hotel">Hotel</a>
            <a href="/forts">Fort</a>
            <a href="/attraction">Attractions</a>
            <a href="/food">Food</a>
             <a href="/onedaytrip">One Day Package</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <div className="hero-image">
        <img src={dhuleMap} alt="Dhule City Map" />
        <div className="hero-text">
          <h2>
            <b>Best Forts</b><br />
            For traveling with us
          </h2>
        </div>
      </div>

      {/* History */}
      <section className="history-section">
        <h1>Historical Background of Khandesh</h1>
        <p>
          The District of Dhulia was previously known as WEST KHANDESH
            district. The ancient name of this region was Rasika. It is bounded
            on the east by Berar ( ancient Vidarbha ) , on the north by the
            Nemad district ( ancient Anupa) and on the south by the Aurangabad (
            ancient Mulaka ) and Bhir ( ancient Asmaka ) districts. Later the
            country came to be called as Seunadesa after king , Seunchandra of
            the Early Yadava dynasty , who rule over it. Subsequently its name
            was changed to Khandesh to suit the title Khan given to the Faruqi
            kings by Ahmad I of Gujarat. During Aryans penetration to the Deccan
            ‘Agastya’ was the first Aryan who crossed Vindhya and resides on the
            bank of Godavari. This territory was included in the empire of
            Ashoka. Pusyamitra, the founder of Sanga dynasty overthrow Maurya
            dynasty. Later on Satavahan rule over the region. About A.D. 250,
            the Satavahans were supplanted by the Abhiras in Western Maharashtra
            ( Regan Isvarsena ). The names of Feudatories of Abhiras ruled in
            Khandesh have known from copperplates discovered at Kalachala
            (Gujarath) and Cave X5II at Ajanta. After downfall of Satavahans the
            Vakatakas rose to power in Vidarbha. The Vakatakas were over thrown
            by Rastrakuta family .This region was rulled by Chalukyas of Badami
            and subsequently Yadavas. In A.D. 1296, Ala-ud-din Khilji invaded
            Ramachandra Yadava who had paid heavy ransom. His son Sankaragana
            discontinued sending the stipulated tribute to Delhi and then
            defected and slain by Malik Kafur in A.D.1318. In 1345, Devagiri was
            passed into the hands of Hasan Gangu, the founder of Bahamani
            dynasty. However, Khandesh form Southern boundaries of the Tashlug
            empire. In 1370, Firoz Taghluq assigned the district of Thalner and
            Karavanda to Malik Raja Faruqui, the founder of ‘Faruqui’ dynasty.
            His family claimed descent from the Khaliph Umer Faruq. He
            established himself at Thalner. The Governor of Gujarath honored
            Malik Raja with the little ‘Sipahsalar of Khandesh’. From the little
            Khan the region came to be known as ‘Khandesh’ the country of Khan.
            During the period, a rich ahir “Asa” of Asirgad had many storehouse
            in Gondvana and Khandesh which were opened in order to sell the
            corn. However his wife was of a charitable disposition persuaded Asa
            to allow the grains to be distributed to the poor and suffering
            without payment to which Asa agreed. It was also with a view to
            employ many of the sufferers as labours that Asa leveled the old
            wall of Asir and constructed a fort built of masonry. Asa also
            distributed food to aged and decrepit who were unable to performed
            manual labour. The Ahir chief in spite of his wealth and strength of
            this fort, without any struggled acknowledged the supremacy of Malik
            Raja who bequeathed Laling to his elder son Malik Nasir and Thalner
            to younger son Malik Iftikar.

        </p>
      </section>

      {/* Fort Section */}
      <div className="forts-container">
        <div className="fort-box">
          <img src={lalingKilla} alt="Laling Killa" />
          <div>
            <a href="https://www.mappls.com/dcc46f">Laling Killa</a>
            <p>
              Laling Killa is a small fort (killa) situated in the present-day
                Dhule district of Maharashtra state in India. The fort is
                situated on top of Laling hill about 9.65 km (6.00 mi) south of
                Dhule city. It was one of the important forts in the Khandesh
                region during the time of the Faruqi Kings
                <h2>History</h2>
                It is a place of considerable antiquity and the fort is supposed
                to have been built during the reign of the first of the Faruqi
                Kings. The fact that this fort and not that of Thalner was
                granted by Malik Raja (1370-1399) to his eldest son would show
                that Laling was his chief fort. It was in this fort that Nasir
                Khan and his son Miran Adil Khan were besieged in 1437 by the
                Bahamani general till they were relieved by an army advancing
                from Gujarat. Early in the seventeenth century it is mentioned
                more than once in connection with the movements of the Mughal
                troop's Deccan campaigns [Ellior, VII, 35, 102.]. In 1862, the
                fort is described, as strongly situated with very few defences
                left. This fort was on the historical Surat-Burhanpur commercial
                road.

            </p>
          </div>
        </div>

        <div className="fort-box">
          <img src={bhamerFort} alt="Bhamer Fort" />
          <div>
            <a href="https://www.google.com/maps/place/Bhamer+Fort">
              Bhamer Fort
            </a>
            <p>
              Bhamer Fort is a type of Giridurg (hill fort) situated at an altitude of about 2500 meters above sea level. It is known as the capital of kings and is surrounded by a village on three sides, with a constructed gateway on the fourth side. The fort is famous for its 184 caves, some of which can still be seen today, along with a water tank and a small temple. The bird’s-eye view from the top of the fort is truly breathtaking, making it a place that should be visited at least once. In 1818, the British defeated the Marathas and took control of the fort, and in 1820, Kalekhan rebelled and rebuilt it. Historical records also mention Captain Briggain, who destroyed important structures on the fort. Bhamer Fort is located about 48 kilometers from Dhule city and 13 kilometers from Sakri. At a distance of 27 kilometers from the fort, there is a well-known Jain pilgrimage site where devotees from all over the country visit to see the black stone statue of Lord Vimalnath. Dhule is well connected by road to major cities such as Shirdi (141 km), Aurangabad (146 km), Indore (261 km), Pune (332 km), Mumbai (324 km), and Bhopal (503 km), with convenient travel options available through Maharashtra State Road Transport Corporation (MSRTC) buses, connecting it to cities like Raipur, Nagpur, Udaipur, Aurangabad, and Parbhani.

            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="card-section">

        <Card className="custom-card">
          <Card.Img variant="top" src={songirFort} />
          <h2>
            <a href="https://www.google.com/maps/dir/...">
              Songir Fort
            </a>
          </h2>
          <p>
             After seeing the Lalling forts, Dhule is a village on the
                Mumbai-Agra highway, on the north side of the 19 km away Songir
                village. Songir village near by a suvarngiri or songir fort. It
                is built in a very important place. It is 304 meters high above
                sea level. From 1370, information available for the songir fort.
                This fort was in the possession of Farooqi Sultans. After that
                he went under the control of the Mughals, Marathas and later the
                British. The British conquered it in 1818. The rounded bastions
                in black stone absorbs attention. The remains of this fort have
                also collapsed.
                <h2>By Road</h2>
                There are many convenient ways to reach Dhule by road. It is 141
                Kms from Shirdi, 146 Kms from Aurangabad, 261 Kms from Indore,
                332 Kms from Pune and 324 Kms from Mumbai and 503 Kms from
                Bhopal. It is well connected with all major cities of the state
                and country like Raipur, Nagpur, Aurangabad, Udaipur and
                Parbhani by Maharashtra State Road Transport Corporation
                (MSRTC).

          </p>
        </Card>

        <Card className="custom-card">
          <Card.Img variant="top" src={thalnerFort} />
          <h2>
            <a href="https://www.mappls.com/4gh7to">
              Thalner Fort
            </a>
          </h2>
          <p>
            Thalner is a market town in Shirpur taluka on the banks of Tapi
                river. It is in Surat-Burhanpur highway. From Sultan Firozshah
                Tughlaq of Delhi, Malik Khan got the status of the neighboring
                areas of Thalner and Karvand. He took control of Thalner and
                established the rule of the Faruq family and constructed a
                triangular-shaped fort at Thalner in 1370. Tapi river on one
                side, The fort was built on the other side by fortification and
                towers. In 1600, Mughal Emperor Akbar defeated Bahadur Shah
                Faruq and defeated Thalener. Marathas won the fort from the
                Mughals. After this Nimbalkar, Holkar Gharana also ruled this
                fort. British officer Thomas Hijlop defeated the Marathas and
                brought them under the rule of the British in 1818. The
                graveyard of the important people of the Faruki family, who have
                ruled over Thalner Fort, is in the city of Thalner. They have
                inscriptions in Arabic. This includes the graves of Malik Raja
                (1396), Malik Naseer (1437), Miran Adil Shah (1441), Miran
                Mubarak Khan (1457). Thalner village is on the Shirpur – Chopda
                road. Near here is the Aner Sanctuary known for its chinkara

          </p>
        </Card>

      </div>

   
    </div>
  );
}

export default TravelGuide;