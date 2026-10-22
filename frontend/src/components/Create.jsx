import { useState, useEffect } from "react";
import AxiosInstance from "./axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "../App.css";
import Textform from "./Form/Textform";
import SelectForm from "./Form/SelectForm";
import MultipleSelectForm from "./Form/MultipleSelectForm";
import DescriptionForm from "./Form/DescriptionForm";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import MyMessage from "./Form/Message";

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);
  const [message, SetMessage] = useState([]);

  console.log(characteristic);
  console.log(league);
  console.log(country);

  const getData = () => {
    (AxiosInstance.get("country/").then((res) => {
      setCountry(res.data);
    }),
      AxiosInstance.get("league/").then((res) => {
        setLeague(res.data);
      }),
      AxiosInstance.get("characteristic/").then((res) => {
        setCharacteristic(res.data);
      }));
  };

  useEffect(() => {
    getData();
  }, []);

  const validationSchema = yup.object({
    name: yup.string("The name must be Text").required("Name is required"),
    attendance: yup
      .number("Attendance must be a number")
      .required("Attendance is required"),
    characteristic: yup.array().min(1, "Select atleast one"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      attendance: "",
      city: "",
      country: "",
      League: "",
      characteristic: [],
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        await AxiosInstance.post("footballclub/", values);
        SetMessage(
          <MyMessage
            messageColor={"green"}
            Messagetext="You Submited the data to your database successfully"
          />,
        );
      } catch (error) {
        console.error("Submit failed:", error.response?.data);
      }
    },
  });

  console.log("formik values:", formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className={"topbar"}>
        <AddBoxIcon />
        <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
          Create a new Records
        </Typography>
      </Box>
      {message}
      <Box className={"formbox"}>
        <Box className={"formarea"}>
          <Textform
            label={"Club name"}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <Box sx={{ marginTop: "30px" }}>
            <Textform
              label={"City"}
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <SelectForm
              label={"League"}
              options={league}
              name="league"
              value={formik.values.league}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.league && Boolean(formik.errors.league)}
              helperText={formik.touched.league && formik.errors.league}
            />
          </Box>
        </Box>

        <Box className={"formarea"}>
          <SelectForm
            label={"Country"}
            options={country}
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />

          <Box sx={{ marginTop: "30px" }}>
            <Textform
              label={"Attendance"}
              name="attendance"
              value={formik.values.attendance}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              slotProps={{
                htmlInput: { inputMode: "numeric", pattern: "[0-9]*" },
              }}
              error={
                formik.touched.attendance && Boolean(formik.errors.attendance)
              }
              helperText={formik.touched.attendance && formik.errors.attendance}
            />
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <MultipleSelectForm
              label={"Characteristic"}
              options={characteristic}
              name="characteristic"
              value={formik.values.characteristic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.characteristic &&
                Boolean(formik.errors.characteristic)
              }
              helperText={
                formik.touched.characteristic && formik.errors.characteristic
              }
            />
          </Box>
        </Box>

        <Box className={"formarea"}>
          <DescriptionForm
            label={"Description"}
            rows={9}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Box>
        <Box className={"formarea"}>
          <Button type="submit" variant="contained" fullWidth>
            Submit the Data
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Create;
