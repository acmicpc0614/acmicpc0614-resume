import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {skills} = skillGroup;
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        // <Skill key={`${skill.name}-${index}`} skill={skill} />
        <div
          key={`${skill.name}-${index}`}
          className="font-bold border-b-2 border-b-gray-400 px-2 m-1 hover:cursor-pointer">
          {skill.name}
        </div>
      ))}
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <div className="">
      <span className="ml-2 text-sm font-medium">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';
