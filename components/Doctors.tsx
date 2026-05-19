import React from 'react';
import Image from 'next/image';
import styles from './Doctors.module.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sneha',
    qualification: 'Chief Dental Surgeon',
    description: 'Leading our team with expertise in comprehensive and advanced dental care.',
    image: null
  },
  {
    id: 2,
    name: 'Dr. Thejas Girish',
    qualification: 'Oral and Maxillofacial Surgeon and Implantologist',
    description: 'Specializes in complex oral surgeries, facial trauma, and dental implants.',
    image: null
  },
  {
    id: 3,
    name: 'Dr. Thripthi R. Nambiar',
    qualification: 'Orthodontist',
    description: 'Expert in diagnosing, preventing, and correcting misaligned teeth and jaws.',
    image: null
  },
  {
    id: 4,
    name: 'Dr. Sukhil T. Sathiyan',
    qualification: 'Oral and Maxillofacial Prosthodontist and Implantologist',
    description: 'Specialized in the restoration and replacement of teeth with advanced prosthetics.',
    image: null
  },
  {
    id: 5,
    name: 'Dr. Manudev S',
    qualification: 'Endodontist',
    description: 'Specialist in saving teeth through advanced root canal treatments and endodontic therapy.',
    image: null
  },
  {
    id: 6,
    name: 'Dr. Abhishek S. Nair',
    qualification: 'Periodontist and Oral Implantologist',
    description: 'Expert in the prevention, diagnosis, and treatment of gum disease and implant placement.',
    image: null
  },
  {
    id: 7,
    name: 'Dr. Gopika Pradeep',
    qualification: 'Pedodontist',
    description: 'Dedicated to providing gentle and specialized dental care tailored for children.',
    image: null
  }
];

export default function Doctors() {
  return (
    <section id="team" className={styles.doctors}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Meet Our <span>Specialists</span></h2>
          <p>Our team of experienced and qualified doctors are dedicated to your oral health.</p>
        </div>
        
        <div className={styles.grid}>
          {doctors.map((doctor) => (
            <div key={doctor.id} className={`glass-panel ${styles.card}`}>
              <div className={styles.imageWrapper}>
                {doctor.image ? (
                  <Image src={doctor.image} alt={doctor.name} width={150} height={150} style={{ objectFit: 'cover' }} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    {doctor.name.split(' ')[1].charAt(0)}
                  </div>
                )}
              </div>
              <h3>{doctor.name}</h3>
              <p className={styles.qualification}>{doctor.qualification}</p>
              <p className={styles.description}>{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
