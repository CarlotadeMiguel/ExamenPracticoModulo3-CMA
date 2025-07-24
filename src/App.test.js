import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import Tareas from './components/Tareas';

beforeEach(() => localStorage.clear());

test('renders welcome heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('¡Bienvenido a mi App en React!');
});

test('renders AWS S3 link', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /aprende más sobre aws s3/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://aws.amazon.com/s3/');
});

test('renders deployment info', () => {
  render(<App />);
  const info = screen.getByText(/esta aplicación está desplegada en/i);
  expect(info).toBeInTheDocument();
});


test('permite escribir y enviar una tarea', () => {
  const mockAdd = jest.fn();
  render(<TodoForm onAdd={mockAdd} />);

  const input = screen.getByPlaceholderText('Nueva tarea...');
  const button = screen.getByRole('button', { name: /añadir/i });

  fireEvent.change(input, { target: { value: 'Comprar leche' } });
  fireEvent.click(button);

  expect(mockAdd).toHaveBeenCalledWith('Comprar leche');
  expect(input).toHaveValue('');
});


test('muestra el texto de la tarea y elimina al hacer clic', () => {
  const mockDelete = jest.fn();
  render(<TodoItem text="Tarea de prueba" onDelete={mockDelete} index={0} />);

  const itemText = screen.getByText('Tarea de prueba');
  expect(itemText).toBeInTheDocument();

  const deleteBtn = screen.getByRole('button', { name: /eliminar tarea tarea de prueba/i });
  fireEvent.click(deleteBtn);

  expect(mockDelete).toHaveBeenCalledWith(0);
});

test('muestra mensaje cuando no hay tareas', () => {
  render(<TodoList todos={[]} onDelete={() => {}} />);
  expect(screen.getByText('No hay tareas aún.')).toBeInTheDocument();
});

test('renderiza varias tareas', () => {
  const tareas = ['A', 'B', 'C'];
  render(<TodoList todos={tareas} onDelete={() => {}} />);

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(3);
  expect(items[0]).toHaveTextContent('A');
  expect(items[1]).toHaveTextContent('B');
  expect(items[2]).toHaveTextContent('C');
});


test('agrega y elimina tareas persistiendo en localStorage', () => {
  render(<Tareas />);

  const input = screen.getByPlaceholderText('Nueva tarea...');
  const addBtn = screen.getByRole('button', { name: /añadir/i });

  // Añadir primera tarea
  fireEvent.change(input, { target: { value: 'Tarea 1' } });
  fireEvent.click(addBtn);
  expect(screen.getByText('Tarea 1')).toBeInTheDocument();

  // Añadir segunda tarea
  fireEvent.change(input, { target: { value: 'Tarea 2' } });
  fireEvent.click(addBtn);
  expect(screen.getByText('Tarea 2')).toBeInTheDocument();

  // Verificar que se guardan en localStorage
  const stored = JSON.parse(localStorage.getItem('todos'));
  expect(stored).toEqual(['Tarea 1', 'Tarea 2']);

  // Eliminar la primera tarea
  const deleteBtns = screen.getAllByRole('button', { name: /eliminar tarea/i });
  fireEvent.click(deleteBtns[0]);
  expect(screen.queryByText('Tarea 1')).not.toBeInTheDocument();

  // Verificar localStorage tras eliminación
  const updated = JSON.parse(localStorage.getItem('todos'));
  expect(updated).toEqual(['Tarea 2']);
});