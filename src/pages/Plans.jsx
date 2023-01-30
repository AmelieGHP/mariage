import React from "react";
import Nav from "../components/Nav";

const Plans = () => {
  return (
    <div className="pageContent">
      <div className="container programmeBox">
        <h3>Plans d'accès</h3>
        <div className="plans">
          <div>
            <h4>Mairie</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.7834838228305!2d-1.4947406850081209!3d47.2990306171681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805f00d5bc77dd1%3A0x1ed45e79f266e2af!2sMairie%20de%20Carquefou!5e0!3m2!1sfr!2sfr!4v1674998771454!5m2!1sfr!2sfr"
              width="300"
              height="300"
              style={{
                border: 0,
                borderRadius: "20px",
                boxShadow: "2px 2px 4px lightgray",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Rue de l'Hôtel de Ville, Carquefou</p>
          </div>
          <div className="">
            <h4>Église</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.9126732865707!2d-1.4945620850082697!3d47.29650611734179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805f011ec6f2f4d%3A0xa1f31424186faf71!2sEglise%20Saint%20Pierre!5e0!3m2!1sfr!2sfr!4v1674998455026!5m2!1sfr!2sfr"
              width="300"
              height="300"
              style={{
                border: 0,
                borderRadius: "20px",
                boxShadow: "2px 2px 4px lightgray",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Place Saint Pierre, Carquefou</p>
          </div>
          <div className="">
            <h4>Domaine du Thiémay</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10812.54960936025!2d-1.8083366328924488!3d47.35071531361344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48058f49c1eb4441%3A0xc3309d10f4890176!2sLe%20Domaine%20du%20Thi%C3%A9may!5e0!3m2!1sfr!2sfr!4v1674999054349!5m2!1sfr!2sfr"
              width="300"
              height="300"
              style={{
                border: 0,
                borderRadius: "20px",
                boxShadow: "2px 2px 4px lightgray",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Le Thiémay, Fay de Bretagne</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
