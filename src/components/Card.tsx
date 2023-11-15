import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Button from "./Button";

export interface ICardProps {
  id: number;
  title: string;
  description: any;
  imageUrl: string;
}

const CardDefault: React.FC<ICardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="mt-6 w-96 shadow-md rounded-md">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={imageUrl} alt="card-image" width={150} height={200} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="text-white">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default CardDefault;
