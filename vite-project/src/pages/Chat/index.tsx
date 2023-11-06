import { Box, Divider, Typography } from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "../../shared/components/Tabs/TabList";
import { Tab } from "../../shared/components/Tabs/Tab";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../app/ThemeProvider/theme";
import { palette } from "../../shared/config/palette";

import Bank from "../../shared/assets/bank.png";
import Lerning from "../../shared/assets/lerning.png";
import Courier from "../../shared/assets/courier.png";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  return (
    <Box
      padding={"3.375rem 1rem 0 1rem"}
      sx={{ background: palette.background.tertiary }}
      height={"100vh"}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 600, paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        Чаты
      </Typography>
      <Tabs style={{ marginBottom: "2rem" }} defaultValue={1}>
        <TabsList>
          <Tab value={1}>Открытые запросы</Tab>
          <Tab value={2}>Закрытые запросы</Tab>
        </TabsList>
      </Tabs>

      <List sx={{ width: "100%", padding: 0 }}>
        <ListItem onClick={() => navigate("/chat/0")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: `url(${Bank})`,
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography fontWeight={500}>1. Выезд на то...</Typography>
            }
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/chat/1")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: `url(${Lerning})`,
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={500}>2. Обучение а...</Typography>}
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/chat/2")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: `url(${Courier})`,
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={500}>3. Доставка ка..</Typography>}
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}
