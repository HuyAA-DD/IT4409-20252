import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import StudentInfo from "./components/StudentInfo";
import ResultTable from "./components/ResultTable";

export default function App() {
  const [studentId, setStudentId] = useState("");
  const [searchId, setSearchId] = useState("");
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const trimmedId = studentId.trim();

    if (!trimmedId) {
      setError("Vui lòng nhập mã sinh viên.");
      setStudent(null);
      setResults([]);
      return;
    }

    setSearchId(trimmedId);
  };

  useEffect(() => {
    if (!searchId) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        setStudent(null);
        setResults([]);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const [studentRes, resultRes] = await Promise.all([
          fetch("/sinhvien.json"),
          fetch("/results.json")
        ]);

        if (!studentRes.ok || !resultRes.ok) {
          throw new Error("Không thể tải dữ liệu từ file JSON.");
        }

        const studentsData = await studentRes.json();
        const resultsData = await resultRes.json();

        const foundStudent = studentsData.find(
          (item) => item.id.toLowerCase() === searchId.toLowerCase()
        );

        if (!foundStudent) {
          setError("Không tìm thấy sinh viên.");
          return;
        }

        const foundResult = resultsData.find(
          (item) => item.studentId.toLowerCase() === searchId.toLowerCase()
        );

        setStudent(foundStudent);
        setResults(foundResult ? foundResult.subjects : []);
      } catch (err) {
        setError(err.message || "Đã xảy ra lỗi.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchId]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tra cứu kết quả học tập</h1>

      <SearchForm
        studentId={studentId}
        setStudentId={setStudentId}
        onSearch={handleSearch}
      />

      {isLoading && <p style={styles.loading}>Đang tải...</p>}

      {!isLoading && error && <p style={styles.error}>{error}</p>}

      {!isLoading && student && (
        <>
          <StudentInfo student={student} />
          <ResultTable results={results} />
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6
  },
  title: {
    textAlign: "center",
    marginBottom: "24px"
  },
  loading: {
    color: "blue",
    fontWeight: "bold",
    marginTop: "20px"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: "20px"
  }
};