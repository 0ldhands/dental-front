import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

// Define the structure of a testimonial
interface Testimonial {
  id: number;
  name: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get<{ testimonials: Testimonial[] }>(
        "http://localhost:5000/testimonials",
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.error("Error fetching testimonials");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/testimonials",
        { name, text },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setName("");
      setText("");
      fetchTestimonials();
    } catch (error) {
      console.error("Error adding testimonial");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/testimonials/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial");
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditId(testimonial.id);
    setName(testimonial.name);
    setText(testimonial.text);
    setOpen(true);
  };

  const handleUpdate = async () => {
    try {
      if (editId === null) return;
      await axios.put(
        `http://localhost:5000/testimonials/${editId}`,
        { name, text },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setOpen(false);
      setEditId(null);
      setName("");
      setText("");
      fetchTestimonials();
    } catch (error) {
      console.error("Error updating testimonial");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Testimonials</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Testimonial" value={text} onChange={(e) => setText(e.target.value)} required multiline />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Testimonial</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell>{testimonial.name}</TableCell>
                <TableCell>{testimonial.text}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(testimonial)} color="primary">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(testimonial.id)} color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Testimonial</DialogTitle>
        <DialogContent>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField label="Testimonial" value={text} onChange={(e) => setText(e.target.value)} fullWidth multiline />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Testimonials;
