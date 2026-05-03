export default function SearchForm({ studentId, setStudentId, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Nhập mã sinh viên..."
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Tra cứu
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    width: "250px",
    fontSize: "16px"
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer"
  }
};