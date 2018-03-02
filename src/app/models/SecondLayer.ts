import {AllJobs} from './AllJobs';
import {CompletedJobs} from './CompletedJobs';
import {LateJobs} from './LateJobs';
import {OpenJobs} from './OpenJobs';

export class SecondLayer {
  allJobs: AllJobs;
  completedJobs: CompletedJobs;
  lateJobs: LateJobs;
  openJobs: OpenJobs;
}
