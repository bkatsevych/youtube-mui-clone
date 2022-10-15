import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/constants";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card
            sx={{
                width: { sx: "450px", md: "320px" },
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#1e1e1e" },
                boxShadow: "none",
                borderRadius: 0,
            }}
        >
            <Link to={`video/${videoId}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: "450px", height: 180 }}
                />
            </Link>
            <CardContent sx={{ height: "80px" }}>
                <Link to={`video/${videoId}`}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#fff"
                        sx={{ overflowY: "hidden" }}
                    >
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={`/channel/${snippet?.channelId}`}>
                    <Typography
                        variant="subtitle2"
                        sx={{ color: "gray", "&:hover": { color: "white" } }}
                    >
                        {snippet?.channelTitle}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
