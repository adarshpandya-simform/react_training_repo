import { useQuery } from "@apollo/client";
import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { GET_CHARACTER } from "../../graphql";

const CharacterPage = () => {
  const { id } = useRouter().query;
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: { characterId: id === undefined ? "1" : id },
  });

  if (loading) {
    return (
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    <code>{JSON.stringify(error)}</code>;
  }

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      p={3}
    >
      <Card sx={{ flex: 2 }} elevation={6}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={data.character.image}
        ></CardMedia>
      </Card>
      <Card sx={{ height: "240px", flex: 9, padding: 2 }} elevation={6}>
        <Typography variant="h5">{data.character.name}</Typography>
        <br />
        <Typography variant="body2">{data.character.status}</Typography>
        <Typography variant="body2">{data.character.species}</Typography>
        <Typography variant="body2">{data.character.location.name}</Typography>
        <Typography variant="body2">{data.character.origin.name}</Typography>
      </Card>
    </Box>
  );
};

export default CharacterPage;
