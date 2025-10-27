import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JournalDetialsCom } from "./Components/JournalDetialsCom";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export const JournalsDetails = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const res = await axios.get(`${API_URL}/journals/v2/${id}`);
        if (res.data.success) {
          setJournal(res.data.data);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch journal details");
      }
    };
    fetchJournal();
  }, [id]);

  if (!journal) return <p className="text-center py-5">Loading...</p>;

  return (
    <div>
   <section
        className="hero-section hero-section-2  text-center text-dark"
        style={{
          backgroundImage: `url("/assets/img/banner/planet-earth-surrounded-by-nature-vegetation.jpg")`,
          backgroundPosition: "left center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="page-title" style={{ color: "#143E6A" }}>
            A single article can{" "}
            <span style={{ color: "#2879D0" }} className="highlight">
              spark a thousand ideas
            </span>
            , but a journal <br /> preserves them for generations.
          </h1>
        </div>
      </section>
      

      <JournalDetialsCom journal={journal} />
    </div>
  );
};
