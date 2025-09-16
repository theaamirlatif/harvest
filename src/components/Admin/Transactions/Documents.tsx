import { DocIcon, Download, FileIcon, Trash } from "@components/Global/Icon";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const documentsData = [
  {
    title: "Master Service Agreement 2023",
    type: "Master Service Agreement 2023",
    uploadDate: "Agreement.pdf",
    uploadBy: "Zion Murry",
    fileType: "pdf",
  },
  {
    title: "HVAC Maintenance Contract",
    type: "HVAC Maintenance Contract",
    uploadDate: "Contract.pdf",
    uploadBy: "Zion Murry",
    fileType: "doc",
  },
  {
    title: "Service Level Agreement",
    type: "Service Level Agreement",
    uploadDate: "Agreement.pdf",
    uploadBy: "Admin User",
    fileType: "pdf",
  },
  {
    title: "Service Level Agreement",
    type: "Service Level Agreement",
    uploadDate: "Agreement.pdf",
    uploadBy: "Admin User",
    fileType: "pdf",
  },
];

const fileTypeIcons: Record<string, string> = {
  pdf: FileIcon,
  doc: DocIcon,
};

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documentsData.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.uploadBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="rounded-3xl bg-white p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-600 transition">
        <ReactSVG src={FileIcon} />
        <p className="text-sm text-blue-600 font-semibold cursor-pointer">
          Click to upload
        </p>
        <p className="text-xs text-gray-400 mt-1">
          or drag and drop
          <br />
          Supported formats: PDF, DOCX, XLSX, JPG (Max 10MB)
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6">
        <p className="font-semibold text-lg">Document Library</p>
        <p className="text-sm text-gray-500">
          Monitor, manage, and control all facility systems & hardware in one
          place.
        </p>

        <div className="flex justify-end mb-3">
          <input
            type="text"
            placeholder="Search Document"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="py-3 px-4 font-semibold">Document Title</th>
                <th className="py-3 px-4 font-semibold">Document Type</th>
                <th className="py-3 px-4 font-semibold">Upload Date</th>
                <th className="py-3 px-4 font-semibold">Uploaded By</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No documents found.
                  </td>
                </tr>
              ) : (
                filteredDocuments.map(
                  ({ title, type, uploadDate, uploadBy, fileType }, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4">{title}</td>
                      <td className="py-3 px-4">{type}</td>
                      <td className="py-3 px-4 flex items-center gap-2">
                        <ReactSVG src={fileTypeIcons[fileType]} />
                        {uploadDate}
                      </td>
                      <td className="py-3 px-4">{uploadBy}</td>
                      <td className="py-3 px-4 flex gap-3">
                        <button
                          aria-label="Download Document"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ReactSVG src={Download} />
                        </button>
                        <button
                          aria-label="Delete Document"
                          className="text-red-600 hover:text-red-800"
                        >
                          <ReactSVG src={Trash} />
                        </button>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Documents;
