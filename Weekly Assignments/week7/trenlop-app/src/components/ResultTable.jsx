export default function ResultTable({ results }) {
  if (results.length === 0) {
    return <p>Không có dữ liệu kết quả học tập.</p>;
  }

  return (
    <div>
      <h2>Kết quả học tập</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>STT</th>
            <th style={styles.th}>Môn học</th>
            <th style={styles.th}>Điểm QT</th>
            <th style={styles.th}>Điểm CK</th>
            <th style={styles.th}>Học kỳ</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={item.id}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{item.subjectName}</td>
              <td style={styles.td}>{item.qt}</td>
              <td style={styles.td}>{item.ck}</td>
              <td style={styles.td}>{item.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f2f2f2"
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center"
  }
};