import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.DATA_API_KEY as string;

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();

  if (!todo.id) return NextResponse.json({ message: 'Todo not found' });

  return NextResponse.json(todo);
}

// put request
export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !id || !title || typeof completed !== 'boolean')
    return NextResponse.json({ message: 'Missing required data' });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}

// delete request
export async function DELETE(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1);

  if (!id) return NextResponse.json({ error: 'id is required' });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  });

  return NextResponse.json({ message: 'Todo deleted successfully' });
}
