import React from "react";
import Header from "@/components/Header";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Contacts;
