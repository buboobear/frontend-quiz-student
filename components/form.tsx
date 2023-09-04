import { API_URL } from "@/utils/api";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import React, { useState } from "react";

export default function Form() {
    const [firtName, setFirtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [donationAmount, setDonationAmount] = useState(1000);
    const [error, setError] = useState("");

    const handleFirtNameChange = (e) => {
        const value = e.target.value;
        setFirtName(value);

        if (value.trim() === "") {
            setError("กรุณากรอกข้อมูล");
        } else {
            setError("");
        }
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);

        if (value.trim() === "") {
            setError("กรุณากรอกข้อมูล");
        } else {
            setError("");
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!emailRegex.test(email)) {
            setError("Email ไม่ถูกต้อง");
        } else {
            setError("");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDonationChange = (event) => {
        const value = event.target.value;
        setDonationAmount(value);
        if (isNaN(value) || parseFloat(value) <= 1000) {
            setError("");
        } else {
            setError("Amount must be greater than 1000");
            alert("Amount must be greater than 1000");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
    };

    return (
        <Card withBorder shadow="xs" p="xl" bg="cyan.2">
            <Title order={1} color="blue">
                Donate
            </Title>

            <form onSubmit={handleSubmit}>
                <Stack spacing={"xs"}>
                    <Input.Wrapper>
                        <Input.Label>First Name</Input.Label>
                        <Input
                            value={firtName}
                            onChange={handleFirtNameChange}
                        />
                        <Input.Error>{error}</Input.Error>
                    </Input.Wrapper>

                    <Input.Wrapper>
                        <Input.Label>Last Name</Input.Label>
                        <Input
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                        <Input.Error>{error} </Input.Error>
                    </Input.Wrapper>

                    <Input.Wrapper>
                        <Input.Label>Email</Input.Label>
                        <Input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <Input.Error>{error}</Input.Error>
                    </Input.Wrapper>

                    <Input.Wrapper>
                        <Input.Label>Donation Amount</Input.Label>
                        <Input
                            type="text"
                            value={donationAmount}
                            onChange={handleDonationChange}
                        />
                        <Input.Error>{error}</Input.Error>
                    </Input.Wrapper>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </Card>
    );
}
