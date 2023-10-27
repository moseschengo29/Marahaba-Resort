import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { addHotel } from "../../services/apiHotels";
import { toast } from "react-hot-toast";
import Modal from "../../ui/Modal";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function AddHotelForm({ close }) {
  const queriClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { mutate: onAddHotel, isLoading } = useMutation({
    mutationFn: addHotel,
    onSuccess: () => {
      toast.success("You have successfully created a hotel");
      queriClient.invalidateQueries({
        queryKey: ["hotels"],
      });
      reset();
      close();
    },
    onError: () => {
      toast.error("Error in creating a hotel!");
    },
  });

  function onSubmit(data) {
    onAddHotel(data);
  }

  function onErrors(errors) {
    console.log(errors);
  }

  return (
    <Modal close={close}>
      <Form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <FormRow label="Cabin name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            disabled={isLoading}
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Maximum number of people"
          error={errors?.maxNumberPeople?.message}
        >
          <Input
            type="number"
            name="maxNumberPeople"
            id="maxNumberPeople"
            {...register("maxNumberPeople", {
              required: "This field is required",
              min: {
                value: 2,
                message: "You need atleast two people ",
              },
            })}
            disabled={isLoading}
          />
        </FormRow>
        <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
          <Input
            type="number"
            name="regularPrice"
            id="regularPrice"
            {...register("regularPrice", {
              required: "This field is required",
            })}
            disabled={isLoading}
          />
        </FormRow>
        <FormRow label="Discount" error={errors?.discount?.message}>
          <Input
            type="number"
            name="discount"
            id="discount"
            {...register("discount", {
              required: "this field is required",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "The discount cannot be greater than regular price",
            })}
            disabled={isLoading}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <Input
            type="text"
            name="description"
            id="description"
            {...register("description", {
              required: "This field is required",
            })}
            disabled={isLoading}
          />
        </FormRow>
        <FormRow label="Image Url" error={errors?.image?.message}>
          <Input
            type="text"
            name="image"
            id="image"
            {...register("image", {
              required: "This field is required",
            })}
            disabled={isLoading}
          />
        </FormRow>

        <button disabled={isLoading}>Add Hotel</button>
      </Form>
    </Modal>
  );
}

export default AddHotelForm;
