--
-- PostgreSQL database dump
--

\restrict Bz3TKrM8WlEhgUyzx84731iTzbiMeV0Age4kdPXEEPEfwLVdJ2PtZfdxoquPieA

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: certificates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.certificates (
    id integer NOT NULL,
    certificate_ref character varying(100),
    name character varying(255),
    gender character varying(20),
    course_name character varying(255),
    start_date date,
    end_date date,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.certificates OWNER TO postgres;

--
-- Name: certificates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.certificates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.certificates_id_seq OWNER TO postgres;

--
-- Name: certificates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.certificates_id_seq OWNED BY public.certificates.id;


--
-- Name: certificates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates ALTER COLUMN id SET DEFAULT nextval('public.certificates_id_seq'::regclass);


--
-- Data for Name: certificates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.certificates (id, certificate_ref, name, gender, course_name, start_date, end_date, created_at) FROM stdin;
1	CERT-1781586973803	pavi	Male	ai	0111-11-11	2222-02-22	2026-06-16 10:46:13.949701
2	CERT-1781588212300	pavithra	Female	it	0078-06-05	7765-05-12	2026-06-16 11:06:52.364232
3	CERT-1781588333437	vani	Male	make up	2026-06-01	2026-06-23	2026-06-16 11:08:53.487958
4	CERT-1781588454108	kavya	Male	dmart	2026-06-12	2026-06-25	2026-06-16 11:10:54.165092
5	CERT-1781588581788	mohan	Male	loosuuu	2026-06-25	2026-06-30	2026-06-16 11:13:01.875882
6	CERT-1781591465066	PAVITHRA A	Female	IT	2026-06-01	2026-06-25	2026-06-16 12:01:05.242643
7	CERT-1781592475777	vuji	Female	it	2026-06-17	2026-06-23	2026-06-16 12:17:55.856043
8	CERT-1781594903802	Raj	Male	Python	2026-01-03	2026-06-09	2026-06-16 12:58:23.887679
\.


--
-- Name: certificates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.certificates_id_seq', 8, true);


--
-- Name: certificates certificates_certificate_ref_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_certificate_ref_key UNIQUE (certificate_ref);


--
-- Name: certificates certificates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict Bz3TKrM8WlEhgUyzx84731iTzbiMeV0Age4kdPXEEPEfwLVdJ2PtZfdxoquPieA

