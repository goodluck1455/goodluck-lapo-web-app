import  { createContext, useContext, useState, ReactNode } from "react";

// Define the TableRow type
interface TableRow {
  id: number;
  AccountNumber: string;
  CustomerName: string;
  SubmissionDate: string;
  Category: string;
  status: "Pending" | "Resolved";
  extraInfo?: string;
}

// Define the context type
interface ComplaintContextType {
  selectedData: TableRow[];
  activeTab: "pending" | "resolved";
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleDataSwitch: (type: "pending" | "resolved") => void;
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const ComplaintContext = createContext<ComplaintContextType | undefined>(undefined);




// Sample data
const ResolveTabledata: TableRow[] = [
    { id: 1, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 2, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 3, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 4, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 5, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 6, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 7, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 8, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 9, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"},
      { id: 10, AccountNumber: "0123456789", CustomerName: "Nazeer Ajibola", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Resolved"}
];

const PendingTabledata: TableRow[] = [
    { id: 1, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 2, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 3, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 4, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 5, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 6, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 7, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 8, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 9, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"},
      { id: 10, AccountNumber: "0045776341", CustomerName: "Goodluck Steohen", SubmissionDate: "11/14/2024 10:27:43", Category: "Card Dispute", status: "Pending"}
];





// Context Provider Component
export const ComplaintProvider = ({ children }: { children: ReactNode }) => {
  const [selectedData, setSelectedData] = useState<TableRow[]>(PendingTabledata);
  const [activeTab, setActiveTab] = useState<"pending" | "resolved">("pending");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [navbar, setNavbar] = useState(false);

  const handleDataSwitch = (type: "pending" | "resolved") => {
    setSelectedData(type === "pending" ? PendingTabledata : ResolveTabledata);
    setActiveTab(type);
    setCurrentPage(1);
  };

  return (
    <ComplaintContext.Provider value={{ selectedData, activeTab, currentPage, setCurrentPage, handleDataSwitch, setNavbar, navbar }}>
      {children}
    </ComplaintContext.Provider>
  );
};

// Custom Hook for using the context
export const useComplaintContext = () => {
  const context = useContext(ComplaintContext);
  if (!context) {
    throw new Error("useComplaintContext must be used within a ComplaintProvider");
  }
  return context;
};
