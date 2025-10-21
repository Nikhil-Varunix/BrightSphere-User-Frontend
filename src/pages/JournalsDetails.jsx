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
      <div
        className="ltn__breadcrumb-area text-center bg-overlay-white-30 bg-image"
        style={{ backgroundImage: `url("/assets/img/banner/about-banner.png")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">{journal.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JournalDetialsCom journal={journal} />
    </div>
  );
};
