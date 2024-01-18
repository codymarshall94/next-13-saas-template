import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Move {
  category: string;
  skill: string;
}

export default function MoveCard({ move }: { move: Move }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{move.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{move.skill}</CardDescription>
      </CardContent>
      <CardFooter>
        <button>Remove</button>
      </CardFooter>
    </Card>
  );
}
