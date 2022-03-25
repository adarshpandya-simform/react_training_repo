import {
  ToadScheduler,
  SimpleIntervalJob,
  Task,
  AsyncTask,
} from "toad-scheduler";
import axios from "axios";

const scheduler = new ToadScheduler();

const task = new AsyncTask("newTask", async () => {
  await axios
    .get("https://randomuser.me/api")
    .then((res) => console.log(res.data));
});

const job = new SimpleIntervalJob({ days: 5, runImmediately: true }, task);

scheduler.addSimpleIntervalJob(job);
