
"use client";
import { useState, useEffect } from 'react';
import { 
  Container, Typography, Button, TextField, Table, 
  TableBody, TableCell, TableHead, TableRow, Paper, 
  Box, Card, CardContent, TableContainer, IconButton, Tooltip 
} from '@mui/material';
// import Grid from '@mui/material/Grid';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import CategoryIcon from '@mui/icons-material/Category';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

type Resource = {
  id: string;
  title: string;
  category: string;
  content: string;
  created_at: string;
};

export default function AdminPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [form, setForm] = useState({ title: '', category: '', content: '' });
  const [editingId, setEditingId] = useState<string | null>(null); // Track editing state

  const fetchData = () => {
    fetch('/api/resources')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setResources(data); })
      .catch(err => console.error("Error:", err));
  };

  useEffect(() => { fetchData(); }, []);

  // DELETE LOGIC
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    try {
      const res = await fetch(`/api/resources?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchData();
    } catch (error) { console.error("Delete error:", error); }
  };

  // EDIT SETUP
  const startEdit = (item: Resource) => {
    setEditingId(item.id);
    setForm({ title: item.title, category: item.category, content: item.content });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: '', category: '', content: '' });
  };

  // CREATE OR UPDATE LOGIC
  const handleSubmit = async () => {
    if (!form.title || !form.category) return alert("Fill required fields");
    
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { id: editingId, ...form } : form;

    try {
      const res = await fetch('/api/resources', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        cancelEdit();
        fetchData();
        alert(editingId ? "Updated Successfully!" : "Published Successfully!");
      }
    } catch (error) { console.error("Submit error:", error); }
  };

  return (
    <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', pb: 8 }}>
      <Box sx={{ bgcolor: '#ffffff', borderBottom: '1px solid #e0e0e0', py: 4, mb: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DashboardIcon color="primary" sx={{ fontSize: 32 }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a237e' }}>Admin Dashboard</Typography>
              <Typography variant="body2" color="textSecondary">Manage Startup Knowledge Base</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
          {/* Stats Card */}
          <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 1' } }}>
            <Card sx={{ borderRadius: 4, background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)', color: 'white' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Total Articles</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800 }}>{resources.length}</Typography>
                  </Box>
                  <ArticleIcon sx={{ fontSize: 60, opacity: 0.3 }} />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Input Form */}
          <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
            <Paper sx={{ p: 4, borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: editingId ? '2px solid #1a237e' : 'none' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AddCircleOutlineIcon color="primary" /> {editingId ? "Update Resource" : "Add New Resource"}
                </Typography>
                {editingId && (
                  <Button startIcon={<ClearIcon />} size="small" color="error" onClick={cancelEdit}>Cancel Edit</Button>
                )}
              </Box>
              
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                <Box>
                  <TextField label="Title" fullWidth value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                </Box>
                <Box>
                  <TextField label="Category" fullWidth value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
                </Box>
                <Box sx={{ gridColumn: 'span 2' }}>
                  <TextField label="Content" multiline rows={4} fullWidth value={form.content} onChange={e => setForm({...form, content: e.target.value})} />
                </Box>
                <Box sx={{ gridColumn: 'span 2' }}>
                  <Button 
                    variant="contained" onClick={handleSubmit} size="large" fullWidth 
                    sx={{ py: 1.5, fontWeight: 'bold', bgcolor: editingId ? '#2e7d32' : '#1a237e' }}
                  >
                    {editingId ? "Update Article" : "Publish Article"}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Table Section */}
          <Box sx={{ gridColumn: 'span 3' }}>
            <TableContainer component={Paper} sx={{ borderRadius: 4, overflow: 'hidden' }}>
              <Table>
                <TableHead sx={{ bgcolor: '#1a237e' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Title</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Category</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resources.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell sx={{ fontWeight: 600 }}>{row.title}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CategoryIcon sx={{ fontSize: 16, color: 'primary.main' }} /> {row.category}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => startEdit(row)} color="primary"><EditIcon /></IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(row.id)} color="error"><DeleteIcon /></IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}