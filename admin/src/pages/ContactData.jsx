import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactData = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/contact");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        console.log(data);
        
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold py-4">Contact List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="text-left px-4 py-2 font-medium text-gray-700">Sr. No.</th>
              <th className="text-left px-4 py-2 font-medium text-gray-700">Name</th>
              <th className="text-left px-4 py-2 font-medium text-gray-700">Email</th>
              <th className="text-left px-4 py-2 font-medium text-gray-700">Phone</th>
              <th className="text-left px-4 py-2 font-medium text-gray-700">Message</th>
              <th className="text-left px-4 py-2 font-medium text-gray-700">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 text-gray-700">{index+1}</td>
                <td className="px-4 py-2 text-gray-700">{contact.name}</td>
                <td className="px-4 py-2 text-gray-700">
                  <Link to={`mailto:${contact.email}`}>{contact.email}</Link>
                </td>
                <td className="px-4 py-2 text-gray-700">{contact.phone}</td>
                <td className="px-4 py-2 text-gray-700">{contact.message}</td>
                <td className="px-4 py-2 text-gray-700">{new Date(contact.date).toLocaleString()}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactData;
