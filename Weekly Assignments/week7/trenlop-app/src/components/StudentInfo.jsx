export default function StudentInfo({ student }) {
  return (
    <div style={styles.box}>
      <h2>Thông tin sinh viên</h2>
      <p><strong>Mã sinh viên:</strong> {student.id}</p>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Lớp:</strong> {student.class}</p>
      <p><strong>Ngày sinh:</strong> {student.birthday}</p>
    </div>
  );
}

const styles = {
  box: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "20px"
  }
};