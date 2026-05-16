import type { ChangeEvent } from 'react';
import { useMemo, useState, useTransition } from 'react';

import { Container } from '$components/container';
import { Input } from '$components/input';
import { Pokemon } from './components/pokemon';
import { filterPokemon } from './utilities/filter-pokemon';

const Application = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextSearchQuery = e.target.value;

    setInputValue(nextSearchQuery);
    startTransition(() => {
      setSearchQuery(nextSearchQuery);
    });
  };

  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input
          label="Search Pokemon"
          placeholder="Search by name, type, ability, species, or description…"
          value={inputValue}
          onChange={handleSearchChange}
        />
      </section>
      <section
        className="grid grid-cols-1 gap-8 transition-opacity md:grid-cols-2 lg:grid-cols-3"
        style={{ opacity: isPending ? 0.65 : 1 }}
      >
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};

export default Application;
