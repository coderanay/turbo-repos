import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Signup } from "../../../packages/ui";



export default function Page() {
  return <>
    <Signup />
  </>
}