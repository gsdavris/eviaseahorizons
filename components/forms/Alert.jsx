import { useState, useEffect } from "react";
import {
  HiOutlineXMark,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const Alert = ({ responseData }) => {
  const [showAlert, setShowAlert] = useState(false);
  const { type, message } = responseData;

  useEffect(() => {
    if (!responseData) {
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  }, [responseData]);

  const getTypeDetailsByName = (type) => {
    const typeMap = {
      danger: {
        color: "bg-red-400",
        icon: <HiOutlineExclamationCircle className="h-8 w-8" />,
        title: "Σφάλμα",
      },
      success: {
        color: "bg-emerald-400",
        icon: <HiOutlineCheckCircle className="h-8 w-8" />,
        title: "Επιτυχία",
      },
      warning: {
        color: "bg-yellow-400",
        icon: <HiOutlineExclamationTriangle className="h-8 w-8" />,
        title: "Προειδοποίηση",
      },
      info: {
        color: "bg-sky-400",
        icon: <HiOutlineInformationCircle className="h-8 w-8" />,
        title: "Πληροφορία",
      },
    };

    if (type in typeMap) {
      const typeDetails = typeMap[type];
      return typeDetails;
    }
  };

  return showAlert ? (
    <div
      className={`text-white px-6 py-4 border-0 rounded-md relative mb-4 ${
        getTypeDetailsByName(type)?.color
      }`}
    >
      <span className="inline-block mr-5 align-middle">
        {getTypeDetailsByName(type)?.icon}
      </span>
      <span className="inline-block align-middle mr-8 capitalize text-xl font-semibold">
        {getTypeDetailsByName(type)?.title}
      </span>
      <p className="mt-2">{message}</p>
      <button
        className="absolute bg-transparent right-0 top-0 mt-6 mr-6 outline-none focus:outline-none"
        onClick={() => setShowAlert(false)}
      >
        <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  ) : null;
};

export default Alert;
