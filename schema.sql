-- Create the table for tracking clicks
CREATE TABLE clicks (
  id INT PRIMARY KEY DEFAULT 1,
  count INT NOT NULL DEFAULT 0,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Insert the initial row
INSERT INTO clicks (id, count) VALUES (1, 0);

-- Create a function to increment the click count
CREATE OR REPLACE FUNCTION increment_clicks()
RETURNS void AS $$
BEGIN
  UPDATE clicks SET count = count + 1 WHERE id = 1;
END;
$$ LANGUAGE plpgsql;

-- Create a function to get the current click count
CREATE OR REPLACE FUNCTION get_clicks()
RETURNS integer AS $$
DECLARE
  click_count integer;
BEGIN
  SELECT count INTO click_count FROM clicks WHERE id = 1;
  RETURN click_count;
END;
$$ LANGUAGE plpgsql;
