import { SubmitHandler, useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Contact.css";
import { useState } from "react";

const schema = z.object({
	email: string().email(),
	subject: string(),
	userMessage: string(),
});

type FormFields = z.infer<typeof schema>;

const Contact = () => {

	const [emailFocus, setEmailFocus] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {

		await new Promise((resolve) => setTimeout(resolve, 1000))
		console.log(data)
	};

	return (
		<div className="contact">
			<div className="container">
				<form
					className="d-flex flex-column justify-content-center align-items-center gap-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h3 className="fw-bold my-3">CONTACT US</h3>
					<input
						required
						placeholder="email address"
						type="email"
						id="email"
						autoComplete="on"
						{...register("email")}
						onFocus={() => setEmailFocus(true)}
						onBlur={() => setEmailFocus(false)}
					/>
					{errors.email && emailFocus && (
						<p className="text-danger m-0">{errors.email.message}</p>
					)}

					<input
						type="text"
						id="subject"
						placeholder="subject"
						required
						autoComplete="on"
						{...register("subject")}
					/>
					{errors.subject && (
						<p className="text-danger m-0">{errors.subject.message}</p>
					)}

					<textarea
						id="message"
						placeholder="your message"
						required
						{...register("userMessage")}
					></textarea>
					{errors.userMessage && (
						<p className="text-danger m-0">{errors.userMessage.message}</p>
					)}

					<button disabled={isSubmitting} className="btn btn-dark">
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
